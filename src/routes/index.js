import express from "express";
import brands from "./BrandRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Marcas"});
    });

    app.use(express.json(),
    brands);
}

export default routes;