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
const path = require("path")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
app.use("/users",userControllers)
app.use("/notes",notesControllers)



// deployment
__dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
})
}
else{
    app.get("/", (req, res) => {
        return res.send({data:"API is running ..."})
    })
}


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