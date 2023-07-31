const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt")

const {validateToken} = require("../middlewares/AuthMiddleware")
const { sign } = require("jsonwebtoken")

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        await User.create({
            username: username,
            password: hash,
        });
        res.json("SUCCESS");
    } catch (error) {
        res.json({ error: "An error occurred while creating the user" });
    }
});


router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username } });

    if (!user) {
        res.json({ error: "User doesn't exist" });
        return; // Add a return statement to prevent further execution
    }

    try {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.json({ error: "Wrong username and password combination" });
        } else {
            const accessToken = sign(
                { username: user.username, id: user.id },
                "importantsecret"
            );
            res.json(accessToken);
        }
    } catch (error) {
        res.json({ error: "An error occurred during login" });
    }
});


router.get("/valid", validateToken, async (req, res) => {
    res.json(req.user)
});

module.exports = router;
