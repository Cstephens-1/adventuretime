import { useEffect, useState } from "react";
import { useEnemyContext } from "./context/EnemyContext";
import { useCharacterContext } from "./context/CharacterContext";
import { useStatsWindow } from "./StatsWindowHook";
import StatsWindow from "./StatsWindow";


export default function Combat(){
    const [enemyContext, setEnemyContext] = useEnemyContext();
    const [characterContext, setCharacterContext] = useCharacterContext();
    const [evadeActive, setEvadeActive] = useState(false)

    const [statsWindowOpen] = useStatsWindow()

    console.log("Stats Window Open:", statsWindowOpen);


    console.log("enemy name in combat", enemyContext.activeEnemy)
    console.log("character in combat", characterContext)

    //function to roll a dice with a sides parameter to use different kinds of dice.
    function rollDice(sides){
        return Math.floor(Math.random()*sides + 1)
    }

    function calculateFinalHit(damage, defense){
        const actualDamage = Math.max(0, damage-defense)
        return actualDamage
    }

    //function to inflict damage on the opposition
        const handleAttack = (attacker, defender)=>{
            let attackRoll
            let damageMultiplier
        //roll dice to determine base damage. This is a 20-sided die for players and a 6 sides die for enemies to use
        if(attacker===characterContext){
            attackRoll = rollDice(20)
            damageMultiplier = 1.5
        }else{
            attackRoll=rollDice(6)
            damageMultiplier = 1
        }

        //add character's strength to the base damage
        const attackModifier = parseInt(attacker.strength)
        const attackValue = attackRoll + attackModifier

        //calculate the damage inflicted. If the value is < enemy's defense + dex, they miss. Otherwise, set their health to the value. When 0, they're defeated.
        const actualDamage = Math.floor(calculateFinalHit(attackValue, defender.defense) * damageMultiplier)
        console.log("this is the attack value:", attackValue, "this is the actual dmg", actualDamage)
        if(actualDamage < defender.defense + defender.dexterity){
            console.log("the attack missed")
        }else{
            const updatedHealth = Math.max(0, defender.health - actualDamage)

            if(attacker === characterContext){
                setEnemyContext({...enemyContext, activeEnemy:{...enemyContext.activeEnemy, health:updatedHealth}})
            } else{
                setCharacterContext({...characterContext, health:updatedHealth})
            }

            if(updatedHealth===0){
                if(attacker === characterContext){
                    console.log(`${defender.name} has been defeated!`)
                }else{
                    console.log("You have been defeated.")
                }
            }
        }
    }

    function resetHealth(){
        setEnemyContext({...enemyContext, activeEnemy:{...enemyContext.activeEnemy, health:50}})
        setCharacterContext({...characterContext, health:16, dexterity:2})
    }

    function handleEvade(){
        const newDexterity = characterContext.dexterity+ 10
        setCharacterContext({...characterContext, dexterity:newDexterity})
        setEvadeActive(true)
        console.log("updated character context after evade", characterContext)
    }

    function enemyAttack(){
        handleAttack(enemyContext.activeEnemy, characterContext)
        if(evadeActive){
            let originalDexterity = characterContext.dexterity - 10
            setEvadeActive(false)
            setCharacterContext({...characterContext, dexterity: originalDexterity})
            console.log("dexterity changes if evade was active", characterContext.dexterity)
        }
    }
    


    return(
        <>
        <h1>{enemyContext.activeEnemy.name}</h1>
        <h1>{enemyContext.activeEnemy.health}</h1>
        <h1>{enemyContext.activeEnemy.difficulty}</h1>
        <h1>{characterContext.characterName}</h1>
        <h1>{characterContext.health}</h1>
        <button onClick={()=>handleAttack(characterContext, enemyContext.activeEnemy)}>Attack</button>
        <button onClick={()=>enemyAttack()}>enemyAttacktestbutton</button>
        <button onClick={()=>handleEvade()}>Evade</button>
        <button onClick={resetHealth}>ResetHealth</button>
        <StatsWindow characterContext={characterContext} statsWindowOpen={statsWindowOpen} />
        </>
    )
}
