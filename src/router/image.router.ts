import { Router } from "express";
import { imageService } from "../service/image.service";

export const imageRouter = Router();

imageRouter.post("/image", async (req, res) => {
  const image = await imageService.create(req.body);
  return res.json(image);
});

imageRouter.get("/image", async (req, res) => {
  const images = await imageService.getAll();
  return res.json(images);
});

imageRouter.get("/image/:id", async (req, res) => {
  const image = await imageService.getById(req.params.id);
  return res.json(image);
});

imageRouter.put("/image/:id", async (req, res) => {
  const image = await imageService.update(req.params.id, req.body);
  return res.json(image);
});

imageRouter.delete("/image/:id", async (req, res) => {
  const image = await imageService.delete(req.params.id);
  return res.json(image);
});
