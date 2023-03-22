import mongoose from "mongoose";

const costumerSchema = mongoose.Schema(
    {
        id: {type: String},
        nameHQ: {type: String, required: true},
        owner: {type: String},
        responsible: {type: String},
        fixedPhone: {type: String},
        phone: {type: String, required: true},
        isActive: {type: Date}
        
    }
);

const costumers = mongoose.model('costumers', costumerSchema);

export default costumers;