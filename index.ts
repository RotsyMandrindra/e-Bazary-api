import express, {Request, Response} from 'express';
const app = express();
const PORT = 5000;

app.get('/',(req : Request, res: Response)=>{
    res.send('Hello you');
})

app.listen(PORT,()=>{
    console.log(`The serveur is running on port: http://localhost:${PORT}`);
})