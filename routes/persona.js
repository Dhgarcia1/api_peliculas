app.get("/",function(req,res){
    res.json({personas})
})

// agregar parametros al array
app.post("/", function (req, res) {
    const {nombre,edad,apellido,email,password,telefono}=req.body
    personas.push(req.body);
    console.log(personas);
    res.json({"msj":"muy bien has agregado persona al array"})
        
    })

// listar y buscar parametros
app.get("/b", function (req, res) {
    const { email } = req.query;
    const persona = personas.find((persona) => persona.email === email);
    res.json({ personas });
  });

// eliminar parametros del array
app.delete('/:id', function (req, res) {
    const {email}=req.query
    personas=personas.filter(persona => persona.email!=email)
    res.json({
        "msg":`Registro  eliminado exitosamente`
    })
})

app.get("/l", function (req, res) {
    const { email,password } = req.query;
    const persona = personas.find(persona => persona.email===email & persona.password===password);
    if(persona)
        res.json({"msg":`login realizado con exito` });
    else
        res.json({"msg":`intente de nuevo`});   
  });