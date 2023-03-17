import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    }
);

const brands = mongoose.model('brands', brandSchema);

export default brands;