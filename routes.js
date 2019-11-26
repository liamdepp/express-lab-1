const express = require("express");
const itemRoutes = express.Router();

itemRoutes.get("/", (req, res) => {
});

const items = [
  { id: 0, product: "iPhone", price: 900, quantity: 50 },
  { id: 1, product: "Goole Pixel", price: 800, quantity: 30 },
  { id: 2, product: "Samsung Galaxy", price: 950, quantity: 100 },
  { id: 3, product: "Nokia", price: 20, quantity: 800 }
];
let nextId = 4;

itemRoutes.get("/cart-items", (req, res) => {
  res.json(items);
});

itemRoutes.get("/cart-items/:id", (req, res)=> {
  const id = parseInt(req.params.id);
  console.log(id);
  let foundItem = items.find(anItem => anItem.id === id);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404); 
    res.send(`No item with id${id}`);
  }
});

itemRoutes.post("/cart-items", (req, res) => {
  const anItem = req.body;
  anItem.id = nextId++;
  items.push(anItem);
  res.status(201);
  res.json(anItem);
});

itemRoutes.put("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = req.body;
  item.id = id;
  const index = items.findIndex(i => i.id === id);
  items.splice(index, 1, item);
  res.json(item);
});

itemRoutes.delete("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = itemRoutes;