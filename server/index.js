const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const PORT = process.env.PORT || 8080;

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_LOGIN}:${process.env.DATABASE_PASSWORD}@cluster0.jmozbhg.mongodb.net/starboard?retryWrites=true&w=majority`);
        app.listen(PORT, () => console.log("Server has been started..."));
    } catch (e) {
        console.log(e);
    }
}

start();