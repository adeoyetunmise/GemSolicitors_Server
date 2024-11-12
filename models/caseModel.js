import mongoose from "mongoose";


const caseSchema = new mongoose.Schema({
    clientName: {
        type:String,
        required: true,
    },

    caseType: {
        type:String,
        required: true,
    },

    lawyerName: {
        type:String,
        required: true,
    },

    status:{
        type:String,
        required: true,
    }
});

export default mongoose.model('Case', caseSchema)