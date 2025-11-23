import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenido desde la ruta / usando ES Modules!");
});

router.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server" });
});

export default router;
