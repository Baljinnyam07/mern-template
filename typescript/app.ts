import express, {Express, Request, Response} from "express";
import usersRouter from "../typescript/routes/usersRouter";

const app:Express = express();

app.get('/', (req:Request, res:Response) => {
    res.json('Hello World');
});

app.get("/hello", (req:Request, res:Response)=>{
    res.json("hi")
})

app.use("/api/users",usersRouter);

export default app;

