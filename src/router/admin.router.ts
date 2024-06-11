import { Router } from "express";
import { adminService } from "../service/admin.service";

export const adminRouter = Router();

adminRouter.post("/admin/register", async (req, res) => {
  const admin = await adminService.create(req.body);
  return res.json(admin);
});

adminRouter.get("/admin", async (req, res) => {
  const admins = await adminService.getAll();
  return res.json(admins);
});

adminRouter.get("/admin/:id", async (req, res) => {
  const admin = await adminService.getById(req.params.id);
  return res.json(admin);
});

adminRouter.put("/admin/:id", async (req, res) => {
  const admin = await adminService.update(req.params.id, req.body);
  return res.json(admin);
});

adminRouter.delete("/admin/:id", async (req, res) => {
  const admin = await adminService.delete(req.params.id);
  return res.json(admin);
});
