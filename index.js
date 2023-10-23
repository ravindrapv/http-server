const http = require("http");
const url = require("url");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;
  const delayMatch = path.match(/^\/delay\/(\d+)$/);
  const statusMatch = path.match(/^\/status\/(\d+)$/);

  if (path === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
          <p> - Martin Fowler</p>
        </body>
      </html>
    `;
    res.end(htmlContent);
  } else if (path === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const jsonData = {
      slideshow: {
        author: "Yours Truly",
        date: "date of publication",
        slides: [
          {
            title: "Wake up to WonderWidgets!",
            type: "all",
          },
          {
            items: [
              "Why <em>WonderWidgets</em> are great",
              "Who <em>buys</em> WonderWidgets",
            ],
            title: "Overview",
            type: "all",
          },
        ],
        title: "Sample Slide Show",
      },
    };
    res.end(JSON.stringify(jsonData, null, 2));
  } else if (path === "/uuid") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const generatedUUID = { uuid: uuidv4() };
    res.end(JSON.stringify(generatedUUID));
  } else if (statusMatch) {
    const statusCode = parseInt(statusMatch[1]);
    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    res.end(`Response with status code ${statusCode}`);
  } else if (delayMatch) {
    const delayInSeconds = parseInt(delayMatch[1]);
    setTimeout(() => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Response after ${delayInSeconds} seconds`);
    }, delayInSeconds * 1000);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found venkat");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
