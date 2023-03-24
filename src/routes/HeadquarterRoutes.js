import express from "express";
import HeadquarterController from "../controllers/HeadquarterController.js"

const router = express.Router();

router
    .get("/sedes", HeadquarterController.readHeadquarter)
    .get("/sedes/:id", HeadquarterController.readHeadquarterById)
    .post("/sedes", HeadquarterController.createHeadquarter)
    .put("/sedes/:id", HeadquarterController.updateHeadquarter)
    .delete("/sedes/:id", HeadquarterController.deleteHeadquarter)

export default router;