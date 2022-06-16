import { Link } from "react-router-dom"

function CharacterCard({eachChar, handleDelete}){
    
    function deleteThisCharacter(){
        handleDelete(eachChar)
    }


    return(
            <div>
                <h1>{eachChar.char_name} </h1>
                <h1>{eachChar.savepoint}</h1>
               <Link link to = '/chapterone'> <button>Play</button></Link>
               <button onClick={deleteThisCharacter}>Delete Character</button>
            </div>
    )
}

export default CharacterCard