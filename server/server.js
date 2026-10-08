import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));
mongoose
 .connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB connected"))
 .catch((error) => console.error("MongoDB error:", error));
app.get("/api/health", (req, res) => {
 res.json({ message: "API is running" });
});
app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));