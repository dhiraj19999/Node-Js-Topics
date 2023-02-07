const http=require('http');
const fs=require('fs');

const server=http.createServer((request,response)=>{ // request and respnce are object
if(request.url==='/'){
    response.end("this is the home page")
}else if(request.url==="/data"){
  
  fs.readFile("./data.json",(err,data)=>{
    if(err){
        response.write(err)
        response.end()
    }else{
        response.end(data)
    }
  })
   
}else{
    response.end(http.STATUS_CODES["404"])
}

})

server.listen(7200,()=>{

    console.log("server is running on port no 7200")
})

// nodemon helps to restart and moniter server automaticaly. command to start server is npm run server