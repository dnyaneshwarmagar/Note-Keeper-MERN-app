const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json())
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;
const userControllers = require("./controllers/users.controller");
const notesControllers = require("./controllers/notes.controller");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use("/users",userControllers)
app.use("/notes",notesControllers)

app.get("/", (req, res) => {
    return res.send({data:"a"})
})
app.use(notFound);
app.use(errorHandler)

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