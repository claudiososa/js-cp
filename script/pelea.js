/*
Creamos las variable y constantes relacioandas a las
las vidas y al maximo y minimo de poder de cada golpe
 */

let vidaGoku = 100
let vidaSuperman = 100
const minPower = 5
const maxPower = 12



const ambosSiguenVivos = () => vidaGoku >0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * (maxPower - minPower)) + minPower

const gokuSiguevivo = () => vidaGoku >0
let round = 0

while (ambosSiguenVivos()) {
    round++
    console.log(`Round ${round}`)
    const golpeGoku = calcularGolpe()
    const golpeSuperman = calcularGolpe()

    if (golpeGoku > golpeSuperman)
    {
      console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
      vidaSuperman -= golpeGoku
      console.log(`Superman queda en ${vidaSuperman} de vida`)
    }else{
      console.log(`Superman ataca a Goku con un golpe de ${golpeGoku}`)
      vidaGoku -= golpeSuperman
      console.log(`Goku queda en ${vidaGoku} de vida`)
    }
}

if (gokuSiguevivo()) {
  console.log(`Goku gano la pelea. Su vida es de ${vidaGoku}`)
}else{
  console.log(`Superman gano la pelea. Su vida es de ${vidaSuperman}`)
}
