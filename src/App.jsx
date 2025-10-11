import axios from "axios"
import { useState, useEffect } from "react"

//endpoint
const actorEP = "https://lanciweb.github.io/demo/api/actors/"
const actressEP = "https://lanciweb.github.io/demo/api/actess/"



function App() {

  const [actors, setActors] = useState([])

  useEffect(()=>{
    axios.get(actorEP)
    .then((res)=>{
      console.log(res.data);
      setActors(...actors, res.data)
      
    })
  } ,[])

  return (
    <>
      <h1>
        
      </h1>
    </>
  )
}

export default App
