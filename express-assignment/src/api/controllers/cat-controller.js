import { listAllCats, findCatById, addCat } from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(Number(req.params.id));
  if (cat) res.json(cat);
  else res.status(404).json({ message: "Cat not found" });
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  res.status(201).json({ message: "New cat added.", result });
};

const putCat = (req, res) => {
  res.json({ message: "Cat item updated." });
};

const deleteCat = (req, res) => {
  res.json({ message: "Cat item deleted." });
};

export { getCat, getCatById, postCat, putCat, deleteCat };
