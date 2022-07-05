const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.send({data:"a"})
})

app.listen(PORT,async () => {
    try {
        console.log(`Server started on PORT ${PORT}`);
        connectDB();
        const connect =await connectDB()
        console.log(`Connected to MongoDB: ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
    }
})