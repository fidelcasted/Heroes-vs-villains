console.log("Heroes vs villains")
console.log("-----")

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const heroesAndVillains = {
    yourHero: ['Iron Man', 'Captain America', 'Batman', 'Superman', "Spiderman"],
    teamMate:['Thor', 'Hulk', 'Flash', 'Daredevil', 'No one'],
    villian: ['The Joker', 'Dr Doom', 'Venom', 'Doomsday', 'Thanos',]
  }
  
  // Store the 'battle' in an array
  let battle = []
  
  // Iterate over the object
  for(let prop in heroesAndVillains) {
    let optionIdx = generateRandomNumber(heroesAndVillains[prop].length)
  
    // use the object's properties to customize the message being added to battle  
    switch(prop) {
      case 'yourHero':
        battle.push(`Your Hero is: "${heroesAndVillains[prop][optionIdx]}".`)
        break
      case 'teamMate':
        battle.push(`Your team mate is: "${heroesAndVillains[prop][optionIdx]}".`)
        break
      case 'villian':
        battle.push(`You're going against: "${heroesAndVillains[prop][optionIdx]}".`)
        break
      default:
        battle.push('You are not worthy... yet')
    }
  }
  
  function battlefield(fight) {
    const formatted = battle.join('\n')
    console.log(formatted)
  }
  
  battlefield(battle);
