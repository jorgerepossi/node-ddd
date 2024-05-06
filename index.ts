import express, { Express } from "express";

const app: Express = express();
app.use(express.json());

app.listen(4001, () => console.log("Server is running"));
