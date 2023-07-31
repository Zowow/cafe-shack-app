const express = require("express");
const router = express.Router();
const { Drink } = require("../models");
const multer = require("multer");

// Set up Multer storage
const storage = multer.memoryStorage(); // Use memory storage instead of disk storage

const MAX_IMAGE_SIZE = 20 * 1024 * 1024; // 20MB

const upload = multer({
  storage,
  limits: {
    fileSize: MAX_IMAGE_SIZE,
  },
});

router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.findAll();

    // Convert Buffer data to Base64-encoded strings
    const drinksWithImages = drinks.map((drink) => {
      const base64Image = drink.image.toString("base64");
      return {
        ...drink.toJSON(),
        image: base64Image,
      };
    });

    res.status(200).json(drinksWithImages);
  } catch (error) {
    console.error("Error retrieving images:", error);
    res.status(500).json({ error: "Failed to retrieve images" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;
    const { originalname, buffer } = req.file;

    const image = await Drink.create({
      name,
      filename: originalname,
      image: buffer,
    });

    res.status(201).json({ message: "Image uploaded successfully", image });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { originalname, buffer } = req.file;

    // Find the drink by ID
    const drink = await Drink.findByPk(id);

    if (!drink) {
      return res.status(404).json({ error: "Drink not found" });
    }

    // Update the drink properties
    drink.name = name;
    drink.filename = originalname;
    drink.image = buffer;

    // Save the changes
    await drink.save();

    // Convert Buffer data to Base64-encoded string
    const base64Image = drink.image.toString("base64");

    res.status(200).json({
      message: "Drink updated successfully",
      drink: {
        ...drink.toJSON(),
        image: base64Image,
      },
    });
  } catch (error) {
    console.error("Error updating drink:", error);
    res.status(500).json({ error: "Failed to update drink" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the drink by ID
    const drink = await Drink.findByPk(id);

    if (!drink) {
      return res.status(404).json({ error: "Drink not found" });
    }

    // Delete the drink
    await drink.destroy();

    res.status(200).json({ message: "Drink deleted successfully" });
  } catch (error) {
    console.error("Error deleting drink:", error);
    res.status(500).json({ error: "Failed to delete drink" });
  }
});


module.exports = router;
