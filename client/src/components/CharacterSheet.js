import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"

function CharacterSheet({currentUser}){

    const [characterList, setCharacterList] = useState([])

    function fetchCharacters(){
        fetch("http://localhost:3000/characters")
        .then(resp=> resp.json())
        .then(character=> setCharacterList(character))
    }

    let myChar = characterList.filter(thisChar => thisChar.user.id === currentUser.id)

    function handleDelete(character){
        fetch(`http://localhost:3000/characters/${character.id}`,{ 
            method: "DELETE"
        })
        let charactersRemaining = characterList.filter(eachCharacter => eachCharacter.id !== character.id);
        console.log(charactersRemaining)
        setCharacterList([...charactersRemaining])
    }

    useEffect(fetchCharacters, [])
    
    function createCharCard(){
        return(
            myChar.map(eachChar => {
                return(
                    <CharacterCard eachChar={eachChar} key={eachChar.id} handleDelete={handleDelete} />
                )
            })
        )}



    return(
        <>
            <h1>Choose Your Player</h1>
            {createCharCard()}
            </>
    )
}

export default CharacterSheet