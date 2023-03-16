import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    }
)

const brands = mongoose.model('brand', brandSchema);

export default brands;