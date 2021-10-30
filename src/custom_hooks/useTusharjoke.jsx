import { useEffect, useState } from "react"


function useTusharjoke(name , lastname) {
    const[joke , setjoke]=useState("")
    useEffect(()=>{
  
      const getjoke= async()=>{
        if(name!=="" && lastname!==""){

          await fetch(`https://api.icndb.com/jokes/random?firstName=${name}&lastName=${lastname}`)
          .then(res=>res.json())
          .then(data=>setjoke(data.value.joke))
        }
      }
      getjoke()
    },[name , lastname])

    return joke
}

export default useTusharjoke
