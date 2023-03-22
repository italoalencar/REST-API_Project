import express from "express";
import brands from "./BrandRoutes.js";
import costumers from "./CostumerRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({titulo: "Marcas"});
    });

    app.use(express.json(),
    brands,
    costumers);
}

export default routes;