import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import CharacterCard from "./CharacterCard"
import CharacterSheet from "./CharacterSheet"
// import GymClassCard from "./GymClassCard"
// import MyClasses from "./MyClasses"
// import NavBar from "./NavBar"
// import WorkoutLibrary from "./WorkoutLibrary"
 
 
function Mypage({currentUser}){

    
// const [characterList, setCharacterList] = useState([])


// function fetchCharacters(){
//     fetch("http://localhost:3000/characters")
//     .then(resp=> resp.json())
//     .then(character=> setCharacterList(character))
// }

// useEffect(fetchCharacters, [])
 
// function createCharCard(){
//     return(
//         characterList.map(eachChar => {
//             return(
//                 <CharacterCard eachChar={eachChar} />
//             )
//         })
//     )}

// function mapClasses(){
//     return(
//         gymClasses.map(gymClass =>{
//             return(
//                 <GymClassCard gymClass={gymClass} key={gymClass.id} handleDelete={handleDelete} formattedStudents={gymClass.formatted_students} fetchGymClasses={fetchGymClasses}/>
//             )
//         })
       
//     )
// }

console.log(currentUser.characters)
    // console.log(characterList)
    return(
        <div>
            <h1>test in my page</h1>
            <CharacterSheet currentUser={currentUser}/>
            <Link link to="/charcreation"><button>Create New Character</button></Link>
           
        </div>
    )}
 
export default Mypage

// const MyClassContainer = styled.div`
//     display: flexbox;
//     flex-direction: row;
// `

const ClassWrapper = styled.div`
    width: 100vw;
    /* background-color: skyblue; */
    /* margin-left: 50%; */
    text-align: center;
`



// const MuscleManWrapper = styled.div`
//     height: 55vh;
//     width: 50vw;
//     background-color: green;
//     position: absolute;
//     border-style: solid;
//     border-width: 2px;
//     border-style: solid
// `

// const PieChartWrapper=styled.div`
//         height: 50vh;
//         width:50vw;
//         margin-top: 50vh;
//         background-color: red;
//         left: 0px;
//         position: relative;
// `

// const TodayStyler=styled.div`
//         margin-left: 50vw;
//         text-align: center
// `