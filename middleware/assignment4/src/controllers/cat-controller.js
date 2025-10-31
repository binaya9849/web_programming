import { addCat } from "../models/cat-model.js";

export const postCat = (req, res) => {
  console.log("Form data:", req.body);
  console.log("File data:", req.file);

  if (req.file) {
    addCat({ ...req.body, filename: req.file.filename });
  }

  res.status(201).json({ message: "Cat uploaded successfully", data: req.body });
};
