import express from "express";
import api from "./api/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base API
app.use("/api/v1", api);

export default app;
