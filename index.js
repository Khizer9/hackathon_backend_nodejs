import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";

const app = express();

app.use(helmet());
app.use(express.json());

mongoose.connect(`mongodb+srv://khizer:khizer12@cluster0.k0zou9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

mongoose.connection.on("connected", () => {
    console.log(chalk.white.bgGreen("---- Connected to MongoDB ----"));
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api", routes);

const PORT = ENV.port || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});