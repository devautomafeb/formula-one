import express from "express";
import cors from "cors";
import carsRoutes from "./routes/carsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Prefixo /api para casar com o front
app.use("/api/cars", carsRoutes);

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "F1 API", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`F1 API ouvindo em http://localhost:${PORT}`);
});
