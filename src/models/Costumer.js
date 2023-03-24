import mongoose from "mongoose";

const costumerSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, required: true},
        email: {type: String, required: true},
        fixedPhone: {type: String},
        phone: {type: String, required: true},
        address: {type: String, required: true},
        isActive: {type: Date, required: true}     
    }
);

const costumers = mongoose.model('costumers', costumerSchema);

export default costumers;