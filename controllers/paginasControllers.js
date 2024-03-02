import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/testimoniales.js';

const paginaInicio =async(req,res)=>{// req -> lo que enviamos : res-> lo que express nos responde
   
    //consultar 3 viajes del modelo viaje
    const promiseDB=[]
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))


    try {
        const resultado= await Promise.all(promiseDB)
        

        res.render("inicio",{
            pagina:'Inicio',
            clase:'home',
            viajes:resultado[0],
            testimoniales:resultado[1],
        })
        
    } catch (error) {
        console.error(error)
    }  
}

const paginaNosotros=(req, res)=>{ // req -> lo que enviamos : res-> lo que express nos responde
    res.render("nosotros",{
        pagina:'Nosotros'
    })
}

const paginaViajes= async(req, res)=>{ // req -> lo que enviamos : res-> lo que express nos responde
    //consutar la base de datos
    const viajes=await Viaje.findAll()
   // console.log(viajes)
    
    res.render("viajes",{
        pagina:'Viajes',
        viajes,
    })
}

const paginaDetalleViaje =async(req, res)=>{
      
    const {slug }=req.params;
    try{
        const viaje= await Viaje.findOne({ where: {slug: slug}})
        res.render("viaje",{
            pagina:'Informacion Viaje',
            viaje
        })

    }catch(err){
         console.log(err)
    }
} // request

const paginaTestimoniales=async(req, res)=>{ // req -> lo que enviamos : res-> lo que express nos responde

    try {
        const testimoniales=await Testimonial.findAll()
        res.render("testimoniales",{
            pagina:'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log(error)
    }
   
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
    
}