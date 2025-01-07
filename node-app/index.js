const express =require("express")
const app = express();
const PORT = process.env.PORT||8181
app.get("/",(req,res)=>{
    return res.json({"message":"Ha ha Tune kardi dockerize"});
})

app.listen(PORT,()=>{
    console.log(`App Started at port : ${PORT}`);
})