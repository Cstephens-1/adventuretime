import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function CharCreation({currentUser}){

    const navigate = useNavigate()

    const [newName, setNewName] = useState("")

    const [characterList, setCharacterList] = useState([])

    function fetchCharacters(){
        fetch("http://localhost:3000/characters")
        .then(resp=> resp.json())
        .then(character=> setCharacterList(character))
    }

    useEffect(fetchCharacters, [])

    console.log(characterList)

    function createCharacter(synthEvent){
        synthEvent.preventDefault();
        const newChar = {
            char_name: newName,
            savepoint: 0,
            user_id: currentUser.id
        }
        console.log(newChar)
        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newChar)})
            .then(resp=> resp.json())
            .then(newCharFromDataBase=> {
                setCharacterList([...characterList, newCharFromDataBase])
                navigate('/mypage')
            })
            console.log(characterList)
            
    }

    return(
        <>
            <form onSubmit={createCharacter} >
                <input type ="text" placeholder="Enter a name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <button type="submit">Create</button>
            </form>
            <Link link to='/mypage'><button>Go home</button></Link>
        </>
    )
}

export default CharCreation