import express from "express";
import tasksRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5002;
const app = express();

app.use(express.json()); // import middleware to parse json before route

app.use("/api/tasks", tasksRoute);

connectDB().then(() => {
  // when database is connected, start app after that.
  app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`);
  });
});
