import mongoose from "mongoose";
import { readFileSync } from 'fs';

const password = readFileSync("./bd.txt", "utf-8");
mongoose.connect(password)

let db = mongoose.connection;

export default db;