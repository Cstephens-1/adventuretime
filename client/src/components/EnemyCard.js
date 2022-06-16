// import { ReactCountdownClock } from "react-countdown-clock";

function EnemyCard({eachEnemy, getEnemies}){
    
    
    function rollDice(){
        let dmg = Math.floor(Math.random()* 10)
        let updatedHealth = eachEnemy.health- dmg;

        console.log(`${eachEnemy.name} takes ${dmg} dmg`)

        fetch(`http://localhost:3000/enemies/${eachEnemy.id}`, {
                method: "PATCH",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({health: updatedHealth})
            })
            .then(resp => resp.json())
            .then(getEnemies())

            //re-render the enemy with updated health pool

            getEnemies()
        }
       

    return(
        <>
        <h1>{eachEnemy.name}</h1>
        <h5>{eachEnemy.health}</h5>
        <button onClick={rollDice}>Fight</button>
        </>
    )
}

export default EnemyCard