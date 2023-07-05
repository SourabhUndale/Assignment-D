const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if(req.url == "/login.html"){
        res.end("hello from the other side ");    
    }
    else if (req.url =="/about")
    {
        res.end("this is about side");
    }
    else if (req.url =="/contect")
    {
        res.end("this is contect side");
    }
    else if (req.url =="/fruit")
    {
        fs.readFile(`${__dirname}/api.json` , "utf-8" , (err, data) => {
            console.log(data)
            const objData = JSON.parse(data);
            res.end(data);
        });
    }
    else if (req.url =="/me")
    {
        res.end("this is This me side");
    }
    else{
    res.writeHead(404, {"Content-type":"text/html"});
    res.end("Error");
    }
});

server.listen(2000, "127.0.0.1", () =>{
    console.log("Listening to the code number 2000")
});
