import express from "express";
import { PORT } from "./env.js";
const app = express();
// const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hellow world..!");
});

app.get("/about", (req, res) => {
  res.send("Hellow About page..!");
});

app.get("/contact", (req, res) => {
  res.send("Hellow Contact page..!");
});
app.get("/api", (req, res) => {
  res.send(`[
  {
    id: 1,
    name: "Ali",
    age: 25,
    city: "Karachi",
    isActive: true,
  },
  {
    id: 2,
    name: "Ahmed",
    age: 28,
    city: "Lahore",
    isActive: false,
  },
  {
    id: 3,
    name: "Sara",
    age: 23,
    city: "Islamabad",
    isActive: true,
  },
]`);
});

app.listen(PORT, () => {
  console.log(`Server run on port :${PORT}`);
});
