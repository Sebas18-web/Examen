import { Router } from "express";
import { getAllProductos } from "../controllers/usercontrollers.js";
import { userRoutes } from "./index.js";

const router = Router();
// router.get('/productos', getproductos);
// obtener todos los productos CRUD
router.get('/all', getAllProductos);

export default router;
