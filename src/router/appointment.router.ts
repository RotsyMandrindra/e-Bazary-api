import { Router } from "express";
import { appointmentService } from "../service/appointment.service";

export const appointmentRouter = Router();

appointmentRouter.post("/appointment", async (req, res) => {
  const appointment = await appointmentService.create(req.body);
  return res.json(appointment);
});

appointmentRouter.get("/appointment", async (req, res) => {
  const appointments = await appointmentService.getAll();
  return res.json(appointments);
});

appointmentRouter.get("/appointment/:id", async (req, res) => {
  const appointment = await appointmentService.getById(req.params.id);
  return res.json(appointment);
});

appointmentRouter.put("/appointment/:id", async (req, res) => {
  const appointment = await appointmentService.update(req.params.id, req.body);
  return res.json(appointment);
});

appointmentRouter.delete("/appointment/:id", async (req, res) => {
  const appointment = await appointmentService.delete(req.params.id);
  return res.json(appointment);
});
