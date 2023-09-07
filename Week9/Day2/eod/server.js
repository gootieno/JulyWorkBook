const http = require("http");
const fs = require("fs");
const comments = [];

/*
1. get comments
2. post a comment
3. serve static assets
4. build html with js
5. make requests to server

*/

const server = http.createServer((req, res) => {
  //home page (index.html)
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    if (reqBody) {
      req.body = JSON.parse(reqBody);
    }
    console.log("req body ", req.body);

    if (req.method === "GET" && req.url.startsWith("/static/")) {
      const urlParts = req.url.split("/static/");
      console.log("url partss ", urlParts);

      const assetPath = urlParts[1];
      const ext = assetPath.split(".")[1];
      console.log("asset path ", assetPath);
      const responseBody = fs.readFileSync(assetPath);

      if (ext === "js") res.setHeader("Content-Type", "text/javascript");
      else if (ext === "css") res.setHeader("Content-Type", "text/css");
      else res.setHeader("Content-Type", "text/plain");

      res.statusCode = 200;
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(htmlPage);
    }

    if (req.method === "GET" && req.url === "/comments") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ comments }));
    }

    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      if (comment) comments.push(comment);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(comment));
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`server running on port ${port}`));
