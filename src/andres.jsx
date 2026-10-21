function Andres(){
    async function consumoApi(){
        let respuesta = await fetch("http://localhost:5000/inicio")
        let datos = await respuesta.json()
        console.log(datos)      

    }
    return (
        <div>
            <button onClick={consumoApi}>llamar Api</button>

        </div>
    )

}
export default Andres