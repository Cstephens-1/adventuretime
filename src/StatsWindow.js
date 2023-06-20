
import { useCallback, useEffect } from "react";
import { useCharacterContext } from "./context/CharacterContext";
import { EnemyContext } from "./context/EnemyContext";



export default function StatsWindow({ statsWindowOpen}) {

  
  const [characterContext, setCharacterContext] =useCharacterContext()


  console.log(characterContext, "this is character context in stats window")

  if (!statsWindowOpen) {
    return null; // Don't render anything if the stats window is closed
  }
  


  console.log("inventory list", characterContext.inventoryList)

    const inventoryList = characterContext.inventoryList

    function addItemToInventory(newItem){
        const updatedInventory = [...inventoryList, newItem]
        setCharacterContext({...characterContext, inventoryList:updatedInventory})
    }

    function deleteItemFromInventory(itemName){
        const index = inventoryList.findIndex((item)=>item.name===itemName)
        if(index!== -1){
            const updatedInventory = [...inventoryList]
            updatedInventory.splice(index, 1)
            setCharacterContext({...characterContext, inventoryList:updatedInventory})
        }
    }

    const handleUseItem = (item) => {
; // Access setCharacterContext from the context
      
      if (item.effect) {
        item.effect(characterContext); // Pass setCharacterContext directly to the effect
      }
    
      if (item.consumable) {
        deleteItemFromInventory(item.name);
      }
    };
    
    const testItem = {
      name: "milk",
      description: "restores 1hp",
      effect: (characterContext) => {
        console.log({...characterContext}, "in effect")
        let newHealth = characterContext.health + 1;
        characterContext.health = newHealth
      },
      consumable: true,
    };
   
  return (
    <div>
      Name: {characterContext.characterName},
      Health: {characterContext.health},
      Strength: {characterContext.strength},
      Constitution: {characterContext.constitution},
      Dexterity: {characterContext.dexterity},
      Intelligence: {characterContext.intelligence},
        <div>
          <h2>Inventory</h2>
          {characterContext.inventoryList.map((item)=>(
            <li>
              <span>{item.name}</span>
              <button onClick={()=>addItemToInventory(testItem)}>test add item</button>
              <button onClick={()=>deleteItemFromInventory(testItem.name)}>test delete item</button>
              <button onClick={() => handleUseItem(item)}>Use Item</button>
            </li>
          ))}
        </div>

    </div>
  );
}

  
