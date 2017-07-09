function  platzom (str){
  let translation = str
  //Si la palbra termina en ar, se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }
  //Si la palabra inicia con Z se le anade pe al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  const length = translation.length
  if(length >= 10){
    const firstHalf = translation.slice(0, Math.round(length /2))
    const secondHalf = translation.slice(Math.round(length /2))
    translation = `${firstHalf}-${secondHalf}`
  }

  //si la palabra original es un palindromo,
  //ninguna regal anterior cuenta y se devuelve
  //la misma palabra inercalando mayusculas y minusculas

  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str){
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
}

console.log(platzom('programar'))
console.log(platzom('Zorro'))
console.log(platzom('Zarpar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))
