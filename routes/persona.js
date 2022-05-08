import { Router } from "express";
import { personaDelete,personaPost,personaGetBuscar,personaGetLogin,personaGet} from "../controllers/persona.js"
const router =Router();

router.post("/",personaPost);

router.get("/",personaGet);

router.get("/buscar",personaGetBuscar);

router.get("/login",personaGetLogin);

router.delete("/",personaDelete);





export default router;

























// import express from "express"
// import {Router} from express
// const router = Router()


// router.get("/",function(req,res){
//     res.json({personas})
// })

// // agregar parametros al array
// router.post("/", function (req, res) {
//     const {nombre,edad,apellido,email,password,telefono}=req.body
//     personas.push(req.body);
//     console.log(personas);
//     res.json({"msj":"muy bien has agregado persona al array"})
        
//     })
//     ro





// // listar y buscar parametros
// router.get("/b", function (req, res) {
//     const { email } = req.query;
//     const persona = personas.find((persona) => persona.email === email);
//     res.json({ personas });
//   });

// // eliminar parametros del array
// router.delete('/:id', function (req, res) {
//     const {email}=req.query
//     personas=personas.filter(persona => persona.email!=email)
//     res.json({
//         "msg":`Registro  eliminado exitosamente`
//     })
// })

// router.get("/l", function (req, res) {
//     const { email,password } = req.query;
//     const persona = personas.find(persona => persona.email===email & persona.password===password);
//     if(persona)
//         res.json({"msg":`login realizado con exito` });
//     else
//         res.json({"msg":`intente de nuevo`});   
//   });