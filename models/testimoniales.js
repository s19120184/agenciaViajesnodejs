import { Sequelize } from "sequelize";
import db from "../config/db.js";

//replicamos la tabla de nuestra bajes de datos
export const Testimonial=db.define('testimoniales',{
          nombre:{
              type:Sequelize.STRING
          },
          correo:{
            type:Sequelize.STRING

          },
          mensaje:{
            type:Sequelize.STRING

          } 
})

