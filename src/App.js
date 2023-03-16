import express from "express";
import db from "./config/dbConnection.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log(`Conexao sucedida`)
})

const app = express();

app.use(express.json());

routes(app);

export default app;