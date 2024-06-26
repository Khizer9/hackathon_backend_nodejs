import { INTERNAL_SERVER_ERROR_MESSAGE } from '../../../constants/index.js';
import postData from '../services/post.js';
import Model from "../models/index.js";
import jwt from "jsonwebtoken";

const postController = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await Model.findOne({ email });

        if (!user) {
            return res.status(400).send({ status: 400, message: 'Email not found' });
        }

        // Verify password
        if (password !== user.password) {
            return res.status(400).send({ status: 400, message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, "SMIT", { expiresIn: '1h' });

        // Send response
        res.status(200).send({ status: 200, message: "Login Successfully!", token });
    } catch (err) {
        console.log("err", err);
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default postController;