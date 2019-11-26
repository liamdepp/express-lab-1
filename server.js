const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes")


const app = express();
app.use(cors());
app.use(express.json());
app.use("/cart-items", itemRoutes)

app.get("/", (req, res) => {
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
});