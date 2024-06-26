import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Model = mongoose.model("Users", dataSchema);

export default Model;