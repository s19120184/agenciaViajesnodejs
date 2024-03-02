import express  from "express";
import dotenv from 'dotenv';
import { paginaInicio ,paginaNosotros,paginaViajes,paginaTestimoniales,paginaDetalleViaje} from "../controllers/paginasControllers.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";


const router= express.Router();

router.get('/', paginaInicio) 
        
router.get('/nosotros',paginaNosotros )

router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)

export default router; //para usar el router en otros archivos