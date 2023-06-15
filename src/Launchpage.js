import { useEffect, useState } from "react"
import { useCharacterContext, useCharacterState } from "./context/CharacterContext"
import { useNavigate } from "react-router-dom"

export default function Launchpage(){
    const [characterContext] = useCharacterContext()
    
    let navigate = useNavigate()

    console.log("character Context:", characterContext)
    return(
        <>
            <h1>{characterContext.character? <h1>{characterContext.name}</h1> : <button onClick={()=> navigate('/createcharacter')}>Create a new Character</button>}</h1>
        </>
    )
}