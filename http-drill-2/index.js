const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/html", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p> - Martin Fowler</p>
      </body>
    </html>
  `);
});

app.get("/json", (req, res) => {
  res.status(200).json({
    slideshow: {
      author: "Yours Truly",
      date: "date of publication",
      slides: [
        // JSON data here
      ],
    },
  });
});

app.get("/uuid", (req, res) => {
  res.status(200).json({ uuid: uuidv4() });
});

app.get("/status/:status_code", (req, res) => {
  const statusCode = parseInt(req.params.status_code);
  res.status(statusCode).send(`Response with status code ${statusCode}`);
});

app.get("/delay/:delay_in_seconds", (req, res) => {
  const delayInSeconds = parseInt(req.params.delay_in_seconds);
  setTimeout(() => {
    res.status(200).send(`Response after ${delayInSeconds} seconds`);
  }, delayInSeconds * 1000);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Express Server is listening on port ${PORT}`);
});
