const http = require("http");

const myServer = http.createServer((request, response) => {
  console.log("Callback function is running");
  response.writeHead(200, { "content-type": "text/html" });
  response.write("Hello from the server");
  response.end();
});

myServer.listen(5000, () => {
  console.log("Server is listening to port 5000");
});