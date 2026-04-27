const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let assets = [];
let idCounter = 1;

// CREATE
app.post("/assets", (req, res) => {
  const newAsset = {
    id: idCounter++,
    title: req.body.title,
    description: req.body.description,
    status: "safe"
  };

  assets.push(newAsset);
  res.json(newAsset);
});

// READ ALL
app.get("/assets", (req, res) => {
  res.json(assets);
});

// READ ONE
app.get("/assets/:id", (req, res) => {
  const asset = assets.find(a => a.id == req.params.id);
  res.json(asset);
});

// UPDATE
app.put("/assets/:id", (req, res) => {
  const asset = assets.find(a => a.id == req.params.id);

  if (asset) {
    asset.title = req.body.title;
    asset.description = req.body.description;
    asset.status = req.body.status;
  }

  res.json(asset);
});

// DELETE
app.delete("/assets/:id", (req, res) => {
  assets = assets.filter(a => a.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
