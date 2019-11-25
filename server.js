const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes")


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", itemRoutes)

app.get("/", (req, res) => {
  res.send("it lives!")
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
});