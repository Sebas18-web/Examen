import express from 'express';
import path from 'path';
import productsRoutes from './routes/products.routes.js';
import registersRoutes from './routes/registers.routes.js';
import userRoutes from './routes/user.routes.js';
import servicioRoutes from './routes/servicio.routes.js';

const app = express()

app.use(express.static('src'));
app.use("/productos", productsRoutes);
app.use("/users", userRoutes);
app.use("/registers", registersRoutes);
app.use("/servicio", servicioRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
});

app.listen(3000,()=> {
console.log("server", 3000)
});