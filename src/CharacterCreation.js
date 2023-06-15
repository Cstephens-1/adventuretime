import { useEffect, useState } from "react"
import { useCharacterContext} from "./context/CharacterContext"
import { Navigate, useNavigate } from "react-router-dom"

export default function CharacterCreation(){
    const navigate=useNavigate()

    const [characterContext, setCharacterContext] = useCharacterContext()
    const [characterName, setCharacterName] = useState('')
    const [strength, setStrength] = useState(0)
    const [constitution, setConstitution] = useState(0)
    const [defense, setDefense] = useState(0)
    const [health, setHealth] = useState(10)
    const [dexterity, setDexterity] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [inventoryList, setInventoryList] = useState([
        {name:"bread", description: "restores two 2hp"},
        {name:"letter", description:"a mysterious letter"}
    ])
    const [totalPoints, setTotalPoints] = useState(15)

function increaseStat(setter){
    return function(e){
        e.preventDefault()
        if(totalPoints > 0){
            setter((prevValue) => prevValue +1)
            setTotalPoints((prevTotal)=> prevTotal-1)

        }
    }
}

useEffect(()=> {
    setHealth(10 + constitution*1.5);
    setDefense(dexterity * .5)
},[constitution, dexterity])

function decreaseStat(setter, value){
    return function(e){
        e.preventDefault()
        if(totalPoints < 15 && value > 0){
            setter((prevValue) => prevValue - 1)
            setTotalPoints((prevTotal)=> prevTotal+1)
        }
    }
}

function handleSubmit(e){
    e.preventDefault()
    setCharacterContext({...characterContext, characterName, health, strength, defense, constitution, dexterity, intelligence, inventoryList})
    navigate('/1')
}

console.log(characterContext)


    return(
        <>
        {totalPoints}
        <form onSubmit={handleSubmit}>
            <div>
                <label for="charactername" className="form-label">Enter a Name </label>
                <input type="name" placeholder="Enter a name for your character" onChange={(e)=> setCharacterName(e.target.value)}/>
            </div>
            <div>
                <label for="characterstr" className="form-label">Strength </label>
                <button onClick={decreaseStat(setStrength, strength)}>-</button>{strength}<button onClick={increaseStat(setStrength)}>+</button>
            </div>
            <div>
                <label for="charactercons" className="form-label">Constitution</label>
                <button onClick={decreaseStat(setConstitution, constitution)}>-</button>{constitution}<button onClick={increaseStat(setConstitution)}>+</button>
            </div>
            <div>
                <label for="characterdex" className="form-label">Dexterity</label>
                <button onClick={decreaseStat(setDexterity, dexterity)}>-</button>{dexterity}<button onClick={increaseStat(setDexterity)}>+</button>
            </div>
            <div>
                <label for="characterint" className="form-label">Intelligence</label>
                <button onClick={decreaseStat(setIntelligence, intelligence)}>-</button>{intelligence}<button onClick={increaseStat(setIntelligence)}>+</button>
            </div>
            <button>Create your Character</button>
        </form>
        </>
    )
}