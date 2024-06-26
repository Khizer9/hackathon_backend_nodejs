import { INTERNAL_SERVER_ERROR_MESSAGE } from '../../../constants/index.js';
import postData from '../services/post.js';
import Model from '../models/index.js'

const postController = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const user = await Model.findOne({ email });
        if(user){
            return res.status(400).send({ status: 400, message: 'Email already exist.' }); 
        }

        const data = await postData(req.body);
        res.status(200).send({ status: 200, message:'User created successfully', data });

    } catch (err) {
        console.log("err", err);
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}
export default postController;