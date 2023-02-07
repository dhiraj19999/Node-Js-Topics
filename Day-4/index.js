const express=require('express');
const fs=require("fs")
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.setHeader("Content-type","text/html")
res.end("<h1>This is home page</h1>")
})

app.get("/data",(req,res)=>{
    const datastream=fs.createReadStream("./data.json","utf-8")
    datastream.pipe(res);
})

app.post("/add",(req,res)=>{
    console.log(req.body)  // to see data in terminal
    res.send("data added")
})


app.get("/students",(req,res)=>{
    //const data=fs.readFileSync("./data2.json","utf-8")
    const data=fs.readFileSync("./data2.json","utf-8")// read data2.json file
   const parsed_data=JSON.parse(data)// data is an json format so we have to parse it
   res.send(parsed_data.students)
  
  
})
// adding data in data2.json using post request
app.post("/addstudent",(req,res)=>{
    const data=fs.readFileSync("./data2.json","utf-8")// read data2.json file
    const parsed_data=JSON.parse(data)// data is an json format so we have to parse it
    parsed_data.students.push(req.body)
    console.log(parsed_data)

    fs.writeFileSync("./data2.json",JSON.stringify(parsed_data))// overwrite data with new data
    res.send("its ok")
})

app.delete("/deletestudent",(req,res)=>{
    const data=fs.readFileSync("./data2.json","utf-8")// read data2.json file
    const parsed_data=JSON.parse(data)// data is an json format so we have to parse it
const newdata= parsed_data.filter((el)=>{
    return el.name!=="dhiraj"
})
fs.writeFileSync("./data2.json",JSON.stringify(newdata))// overwrite data with new data
res.send("its ok")
})

app.listen(4500,()=>{

    console.log("server on port 4500")
})