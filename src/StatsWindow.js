export default function StatsWindow({ characterContext, statsWindowOpen }) {
  if (!statsWindowOpen) {
    return null; // Don't render anything if the stats window is closed
  }

  return (
    <div>
      Name: {characterContext.characterName},
      Health: {characterContext.health},
      Strength: {characterContext.strength},
      Constitution: {characterContext.constitution},
      Dexterity: {characterContext.dexterity},
      Intelligence: {characterContext.intelligence},
      Inventory: {characterContext.inventoryList.map((item) => item.name).join(",")}
    </div>
  );
}

  
