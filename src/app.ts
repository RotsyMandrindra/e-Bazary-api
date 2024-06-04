import * as express from "express";
import * as cors from "cors";
import { brandRouter } from "./router/brand.router";
import { adminRouter } from "./router/admin.router";
import { appointmentRouter } from "./router/appointment.router";
import { carRouter } from "./router/car.route";
import { imageRouter } from "./router/image.router";

//server configuration
export const app = express();

//all middleware
app.use(cors());
app.use(express.json());

//all router
app.use(brandRouter);
app.use(adminRouter);
app.use(appointmentRouter);
app.use(carRouter);
app.use(imageRouter);
