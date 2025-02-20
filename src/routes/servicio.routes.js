import { Router } from "express";
import { getAllProductos } from "../controllers/serviciocontroller.js";

const router = Router();
// router.get('/productos', getproductos);
// obtener todos los productos CRUD
router.get('/api', getAllProductos);

export default router;