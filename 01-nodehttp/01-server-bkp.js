/**
 * Putting the old code from server.js file into this one so as to keep that file clean
 */

const http = require("http");
const PORT = 5000;

const todos= [
  {id:1, text: "Todo One"},
  {id:2, text: "Todo Two"},
  {id:3, text: "Todo Three"},
]

const server = http.createServer((req,res) =>{
  // const {headers,url,method} = req;
  // console.log(headers,url,req);
  
  // res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");

  // res.writeHead(404,{
  //   "Content-Type": "application/json",
  //   "X-Powered-By": "Node.js"
  //   });
 
  // res.end(
  //   JSON.stringify({
  //   success:false,
  //   error: "Not Found",
  //   data:null
  // }));

  res.writeHead(200,{
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js"
    });
 
    console.log(req.headers.authorization);
    let body = [];

    req.on("data", chunk =>{
      body.push(chunk);
    }).on("end", ()=>{
      body= Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
    success:true,
    data:todos 
  }));
});

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

