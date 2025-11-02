import { Router } from "express";
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  patchCar,
  deleteCar,
} from "../controllers/carsController.js";

const router = Router();

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", createCar);
router.put("/:id", updateCar);
router.patch("/:id", patchCar);
router.delete("/:id", deleteCar);

export default router;
