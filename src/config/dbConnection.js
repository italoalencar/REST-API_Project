import mongoose from "mongoose";

mongoose.connect("mongodb+srv://littledoors:littledoors123@cluster0.skb2mzu.mongodb.net/marcas")

let db = mongoose.connection;

export default db;