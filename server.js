const express=require("express")
const app=express()
const connectDB = require("./config/connectDB")
//midlewer
app.use(express.json())
//connect database
connectDB()

//routes
app.use("/btss",require("./routes/bts"))
app.use("/ticksts",require("./routes/ticket"))
app.use("/admins",require("./routes/admin"))
app.use("/ajents",require("./routes/ajent"))
//run server

const port=process.env.PORT||5000
app.listen(port,err=>err? console.log("erreur")
:console.log(`server is runing on port ${port}`))