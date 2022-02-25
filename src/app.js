import express from "express";
import cors from "cors";
import config from "./config";
import productsRoute from "./routes/products.routes";

const app = express();

// Settings
app.set("port", config.port);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoute);

export default app;
