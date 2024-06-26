import { Router } from 'express';
import userRoutes from '../modules/user/routes.js';
import loginRoutes from '../modules/login user/routes.js';
import productRoutes from '../modules/product/routes.js';
import categoryRoutes from '../modules/categoy/routes.js';
import uploadRoutes from "../modules/upload/routes.js";

const router = Router();

router.use('/user', userRoutes)
router.use('/login', loginRoutes)
router.use('/product', productRoutes)
router.use('/category', categoryRoutes)
router.use('/upload', uploadRoutes)

export default router;