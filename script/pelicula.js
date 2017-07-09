const starWars7 = 'Star Wars: El desspertar de la...'
const pgStarWars7 = 13

const nameClaudio = 'Claudio'
const ageClaudio = 26

const nameJulio = 'Julio'
const ageJulio = 12

function canWatshStarWars7(name,age,isWithAdult = false){
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)
  }else if (isWithAdult){
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age} se encuentra acompanado`)
  }else{
    alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} de edad y necesita tener ${pgStarWars7}`)
  }
}

canWatshStarWars7(nameClaudio,ageClaudio)
canWatshStarWars7(nameJulio,ageJulio,true)
