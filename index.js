// require("dotenv").config();

// const exp = require("constants");
// const express = require("express");
// const app = express();

// const path = require("path");

// app.use(express.static(path.join(__dirname, "public")));

// app.use(express.json());

// const productosRouter = require("./routes/productos.router");
// app.use("/productos", productosRouter);

// app.use("/productos", require("./routes/productos.router"));

// app.use("/auth", require("./routes/auth.router"));

// app.get("/", (req, res) => {
//     res.send("");
// });



// app.get("/productos/:id", (req, res) => {
//     console.log(req.params.id);
//     res.send("Producto: " + req.params.id);
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

// Configuración de middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rutas
const productosRouter = require("./routes/productos.router");
app.use("/productos", productosRouter);

const authRouter = require("./routes/auth.router");
app.use("/auth", authRouter);

// Ruta base
app.get("/", (req, res) => {
    res.send("¡Bienvenido a la API!");
});

// Puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});