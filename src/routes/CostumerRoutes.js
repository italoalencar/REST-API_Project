import express from "express";
import CostumerController from "../controllers/CostumerController.js"

const router = express.Router();

router
    .get("/clientes", CostumerController.readCostumer)
    .get("/clientes/:id", CostumerController.readCostumerById)
    .post("/clientes", CostumerController.createCostumer)
    .put("/clientes/:id", CostumerController.updateCostumer)
    .delete("/clientes/:id", CostumerController.deleteCostumer)

export default router;