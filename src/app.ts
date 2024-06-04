import * as express from "express";
import * as cors from "cors";
import { brandRouter } from "./router/brand.router";

//server configuration
export const app = express();

//all middleware
app.use(cors());
app.use(express.json());

//all router
app.use(brandRouter);
