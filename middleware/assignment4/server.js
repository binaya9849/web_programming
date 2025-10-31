import express from "express";
import catRouter from "./src/routes/cat-router.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/cat", catRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
