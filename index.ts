import express, {Request, Response} from 'express';
import cors from 'cors';
import { createAdmin } from './Controller/admin';
import { getAllAdmin } from './Controller/admin';
import { createCar } from './Controller/car';
import { configDotenv } from 'dotenv';
const app = express();
const PORT = 5000;

configDotenv({ path: '.env' });

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );


app.post('/admin', createAdmin);
app.get('/admin',getAllAdmin);
app.post('/car', createCar);


app.listen(PORT,()=>{
    console.log(`The serveur is running on port: http://localhost:${PORT}`);
})