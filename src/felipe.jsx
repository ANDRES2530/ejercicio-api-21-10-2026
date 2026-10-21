import { useState } from "react"
function Felipe(){
    const[hola,setHola]=useState("")
   async function consumoApi(){
        let res= await fetch("http://localhost:5000/felipe")
        let data = await res.json()
        console.log(data)    
        setHola(data)  

    }
    return (
        <div>
            <p>{hola.mensaje}</p>
            <button onClick={consumoApi}>Api</button>
        </div>
    )

}
export default Felipe