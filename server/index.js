const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = require("./models")

// Routers
const drinkRouter = require("./routes/Drink");
app.use("/drink", drinkRouter)

const foodRouter = require("./routes/Food");
app.use("/food", foodRouter)

const etcRouter = require("./routes/Etc");
app.use("/etc", etcRouter)

const userRouter = require("./routes/User");
app.use("/auth", userRouter)




db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log("Cafe Shack server is up");
    });


})







