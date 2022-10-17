const { Router } = require('express');
// Importar todos los routers;
const userRoutes = require('./users')


const router = Router();
router.use('/users', userRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
