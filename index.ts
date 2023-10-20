// import Express,{Application,Request, Response } from "express";

// const app: Application= Express();

// const port = 2300

// // Default get

// app.get('/', (req:Request, res: Response) => {
//  res.send('Hello World');
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`);
// });

import express, { Application, Request, Response } from "express"

const port = 2500;

const db= [
    {
        id: 1,
        name:"Daniel"
    },
    {
        id: 2,
        name:"Daniel"
    }
]

const app:Application= express();

app.use(express.json());

// Default get;
app.get("/", (req:Request, res:Response)=>{
    res.send("Welcome")
})

app.get("/get-all", (req:Request,res: Response)=>{
    res.send(db)
})

app.post("/add", (req: Request,res: Response)=>{
    let con= 
})

app.listen(port, () =>{
    console.log("listening to port",port);
    
})