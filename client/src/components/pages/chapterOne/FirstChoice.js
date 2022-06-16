import {useEffect, useState} from 'react'
import EnemyCard from '../../EnemyCard'

function Firstchoice(){
    const [enemyList, setEnemyList] = useState([])
    // let targetEnemy = 'Dragon'

    function getEnemies(){
        fetch('http://localhost:3000/enemies')
        .then(resp=> resp.json())
        .then(enemy=> setEnemyList(enemy))
    }

    useEffect(getEnemies,[])
    
    // function displayEnemy(){
    //     return(
    //         enemyList.map(eachEnemy => {
    //             return(
    //                 <EnemyCard eachEnemy={eachEnemy} key={eachEnemy.id} getEnemies={getEnemies}/>
    //                 )
    //             })
    //             )
    //         }

            function displayDragon(){
                return(
                    enemyList.filter(eachEnemy => eachEnemy.name === 'Dragon')).map(filteredEnemy =>{
                        return(
                            <EnemyCard eachEnemy={filteredEnemy} key={filteredEnemy.id} getEnemies={getEnemies}/>
                            )
                        })
                    }
    
            
    return(
        <>
        <h1>{displayDragon()}</h1>
   
        </>
    )
}

export default Firstchoice