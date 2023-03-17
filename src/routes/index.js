import express from "express";
import brands from "./BrandRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({titulo: "Marcas"});
    });

    app.use(express.json(),
    brands);
}

export default routes;