import mongoose from "mongoose";

const headquarterSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        costumer: { type: mongoose.Schema.Types.ObjectId, ref: 'costumers', required: true},
        responsible: {type: String},
        fixedPhone: {type: String},
        phone: {type: String, required: true},
        isActive: {type: Date}   
    }
);

const headquarters = mongoose.model('headquarters', headquarterSchema);

export default headquarters;