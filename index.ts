import express, {Request, Response} from 'express';
import cors from 'cors';
import { createAdmin } from './Controller/admin';
import { getAllAdmin } from './Controller/admin';
const app = express();
const PORT = 5000;

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );


app.post('/admin', createAdmin);
app.get('/admin',getAllAdmin);


app.listen(PORT,()=>{
    console.log(`The serveur is running on port: http://localhost:${PORT}`);
})