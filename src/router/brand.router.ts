import { Router } from "express";
import { brandService } from "../service/brand.service";

export const brandRouter = Router();

brandRouter.post("/brands", async (req, res) => {
  const brand = await brandService.create(req.body);
  return res.json(brand);
});

brandRouter.get("/brands", async (_req, res) => {
  const brands = await brandService.getAll();
  return res.json(brands);
});

brandRouter.get("/brands/:id", async (req, res) => {
  const brand = await brandService.getById(req.params.id);
  return res.json(brand);
});

brandRouter.put("/brands/:id", async (req, res) => {
  const brand = await brandService.update(req.params.id, req.body);
  return res.json(brand);
});

brandRouter.delete("/brands/:id", async (req, res) => {
  const brand = await brandService.delete(req.params.id);
  return res.json(brand);
});
