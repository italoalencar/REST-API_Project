import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;