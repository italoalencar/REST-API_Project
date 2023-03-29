import express from "express";
import brands from "./BrandRoutes.js";
import headquarters from "./HeadquarterRoutes.js";
import costumers from "./CostumerRoutes.js"
import categories from "./CategoryRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({titulo: "Marcas"});
    });

    app.use(express.json(),
    brands,
    costumers,
    headquarters,
    categories
    );
}

export default routes;