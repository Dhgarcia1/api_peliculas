import Persona from "../models/persona.js"
import bcryptjs from "bcryptjs"
const personaPost = async (req, res) => {
    const { nombre, apellido, edad, telefono, email, password } = req.body
    const salt=bcryptjs.genSaltSync(10)
    const persona = new Persona({ nombre, apellido, edad, telefono, email, password })
    persona.password=bcryptjs.hashSync(password, salt)
    await persona.save()
    res.json({
        msg: "registro exitoso"
    })
}
const personaGet = async (req, res) => {
    const personas = await Persona.find()
    res.json({
        personas
    })
}
const personaGetBuscar = async (req, res) => {
    const { email } = req.query
    const personas = await Persona.find({ email })
    res.json({
        personas
    })
}
const personaGetLogin = async (req, res) => {
    let { email, password } = req.query
    const personas = await Persona.findOne({email})
    const validarpassword=bcryptjs.compareSync(password,persona.password)
    
    if (validarpassword)
        res.json({
            msg: "login exitoso"
        })
    else
        res.status(401).json({
            msg: "ud que hace aqui"
        })
}
const personaDelete = async (req, res) => {
    const { email } = req.query
    const persona = await Persona.findOneAndDelete({ email })
    res.json({ "Eliminado": persona })
}
export { personaPost, personaGet, personaGetBuscar, personaGetLogin, personaDelete }















