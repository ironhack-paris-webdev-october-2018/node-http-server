// include the built-in Node.js HTTP package
const http = require("http");

// create a Node.js server object
const server =
  // this function will be run whenever a client connects to our server
  http.createServer((request, response) => {
    console.log(`Client requested this URL ${request.url}`);

    if (request.url === "/") {
      // say "Hello, world!" if they are asking for the home page
      // write() sends content to the client
      response.write("Hello, world!");
      // finish the response (otherwise it will stay loading forever)
      response.end();
    }
    else if (request.url === "/about") {
      response.write("I'm Nizar and I like pizza 🍕");
      response.end();
    }
    else {
      // say "404 Not Found Page" if they are asking for anything else
      response.statusCode = 404;
      response.write("404 Not Found Page");
      response.end();
    }
  });

// start accepting requests
server.listen(3000);
