import { useEffect, useState } from "react"
import { useCharacterContext, useCharacterState } from "./context/CharacterContext"
import { Navigate, useNavigate } from "react-router-dom"
import { useEnemyContext } from "./context/EnemyContext";
import { useStatsWindow } from "./StatsWindowHook";
import StatsWindow from "./StatsWindow";




export default function Page1(){

    const [characterContext] = useCharacterContext()
    const [enemyContext, setEnemyContext] = useEnemyContext();
    const [statsWindowOpen]= useStatsWindow()
    const navigate=useNavigate()

    //create an enemy to test combat
    const Goblin={
        name:"Goblin",
        health:10,
        dexterity: 2,
        intellect: 1,
        strength: 5,
        difficulty:"easy"
    };

    const baseDefense = 3

    const goblinWithDefense={
        ...Goblin, defense:calculateEnemyDefense(Goblin, baseDefense)
    }

    function calculateEnemyDefense(enemy, baseDefense){
        const dexterityModifierForDefense=enemy.dexterity
        const defense = baseDefense + dexterityModifierForDefense
        return defense
    }


    //add activeEnemy to enemy context so only this one displays
    function setActiveEnemy(){
        setEnemyContext({...enemyContext, activeEnemy:goblinWithDefense})
        navigate("/combat")
    }

    return(
        <>
        <h1>{characterContext.characterName}, your adventure begins!</h1>
        <p>
          As you awaken, a surge of anticipation and excitement courses through
          your veins. The room is bathed in a gentle morning light, casting a warm
          glow on the surroundings. Your attention is drawn to the nightstand,
          where a letter with a distinct gold seal rests, beckoning you to uncover
          its secrets.
        </p>
        <StatsWindow characterContext={characterContext} statsWindowOpen={statsWindowOpen} />
        <button onClick={() => setActiveEnemy()}>Fight</button>
      </>
    )
}