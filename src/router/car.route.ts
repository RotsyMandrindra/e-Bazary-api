import { Router } from "express";
import { carService } from "../service/car.service";

export const carRouter = Router();

carRouter.post("/car", async (req, res) => {
  const car = await carService.create(req.body);
  return res.json(car);
});

carRouter.get("/car", async (req, res) => {
  const cars = await carService.getAll();
  return res.json(cars);
});

carRouter.get("/car/:id", async (req, res) => {
  const car = await carService.getById(req.params.id);
  return res.json(car);
});

carRouter.put("/car/:id", async (req, res) => {
  const car = await carService.update(req.params.id, req.body);
  return res.json(car);
});

carRouter.delete("/car/:id", async (req, res) => {
  const car = await carService.delete(req.params.id);
  return res.json(car);
});
