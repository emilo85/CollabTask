import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import homeRoutes from "./src/routes/home.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", homeRoutes);
app.use("/api/message", homeRoutes);
// app.get("/api/message", (req, res) => {
//   res.json({ message: "Hello from the server" });
// });

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
