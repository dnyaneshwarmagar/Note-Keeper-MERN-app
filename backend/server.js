const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(PORT, () => {
    try {
        console.log(`Server started on PORT ${PORT}`)
    } catch (err) {
        console.log(err)
    }
})