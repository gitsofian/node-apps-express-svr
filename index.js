const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get(`/api/todo`, (req, res) => {
  const dataPath = `data/todo.json`;

  fs.readFile(dataPath, "utf8", function (err, data) {
    if (!err && data) {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    } else {
      res.json([]);
    }
  });
});

app.post(`/api/todo`, (req, res) => {
  console.log("POST BODY", req.body);

  const data = req.body;
  const dataString = JSON.stringify(data, null, 2);
  const dataPath = `data/todo.json`;

  writeFileSyncRecursive(dataPath, dataString);

  res.status(200).json({
    successful: true,
  });
});

app.listen(port, () => {
  console.log(`Example app running on https://meriane.dev:${port}/api/todo`);
});

function writeFileSyncRecursive(filename, content, charset) {
  const folders = filename.split(path.sep).slice(0, -1);
  if (folders.length) {
    // create folder path if it doesn't exist
    folders.reduce((last, folder) => {
      const folderPath = last ? last + path.sep + folder : folder;
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath;
    });
  }
  fs.writeFileSync(filename, content, charset);
}
