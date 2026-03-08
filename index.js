const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// SUM (query parameters)
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b
  });
});

// SUBTRACT (path parameters)
app.get("/sub/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a - b
  });
});

// MULTIPLY (POST)
app.post("/mul", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a * b
  });
});

// DIVIDE (POST)
app.post("/div", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b === 0) {
    return res.status(400).json({
      error: "Division by zero not allowed"
    });
  }

  res.json({
    ans: a / b
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});