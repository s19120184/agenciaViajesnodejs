//servidor de express
import  express  from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();//funcion para ejecutar express

//conectar a la base de datos
db.authenticate()
     .then(()=> console.log('Base de datos conectado'))
     .catch((error)=> console.log(error))



//definir puerto
const port =process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//obtener el anio actual
app.use((req,res, netxt)=>{
     const year=new Date()
     //locals son varibles internas de express
     res.locals.actualYear= year.getFullYear();
     res.locals.nombreSitio= "Agencia de viajes"
     //pasamos al siguiente middelware
     return netxt()
})

//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended:true }))


//definit la carpeta publica
app.use(express.static("public"))

//agregar al router
app.use('/' , router)  //use soport todos los verbos get, post...delete 


app.listen(port, () => {
     console.log("El servidor esta funcionando en el puerto", port);

})