const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getProducts = require("./routers/connection/apiProducts");

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/products", getProducts);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
