const express = require ("express")
const app = express()
const path = require("path")

app.listen(process.env.PORT || 3000, ()=> console.log ("Estamos usando el puerto 3000"));

const staticFiles = express.static(path.join(__dirname,"/public"))
app.use(staticFiles)

app.get("/", (req,res)=> {
    const pathHtml = path.resolve(__dirname,"views/home.html")
    res.sendFile(pathHtml)
})
app.get("/register",(req,res) =>{
    const pathRegister =path.resolve(__dirname,"views/register.html")
    res.sendFile(pathRegister)
})
app.get("/login",(req,res) =>{
    const pathRegister =path.resolve(__dirname,"views/login.html")
    res.sendFile(pathRegister)
})