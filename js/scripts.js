//1️⃣ Camila quiere generar un código de acceso. Debe crear un string que combine un nombre enviado por parámetro en mayúsculas con un número aleatorio entre 100 y 999.

const codeAcces = (name) => {
    const aleatoryNumber = Math.floor(Math.random()*(999-100)+100)
    const codeName = name.toUpperCase()
    console.log(`Código de acceso: ${codeName}${aleatoryNumber}`);
}
codeAcces('hola')

//2️⃣ Bego tiene una lista de productos: ["Camiseta", "Pantalón", "Zapatos"]. Debe añadir un nuevo producto al principio y otro al final de la lista. Luego, debe mostrar la lista actualizada.

const productList = (list) => {
    const newProductFront = list.unshift('Cinturón')
    const newProductEnd = list.push('Ropa interior')
    console.log(`${list}`);
    
}
productList(["Camiseta", "Pantalón", "Zapatos"])

//3️⃣ Sabrina quiere crear un nombre de usuario. Debe combinar la primera letra de un nombre enviado por parámetro en mayúscula con un número aleatorio entre 1 y 50.

const userName = (name) => {
    const firstCaracter = name.charAt(0).toUpperCase()
    const aleatoryNumber = Math.floor(Math.random()*50)
    console.log(`${firstCaracter}${aleatoryNumber}`);   
}
userName('Sabrina')

//4️⃣ Macarena tiene un array con tres números. Debe calcular el promedio y determinar si es mayor o menor que 50.

const determineIfNumberIsBiggerOrSmaller = (listNumber) => {
    const promedio = (listNumber[0] + listNumber[1] + listNumber[2]) / 3
    promedio > 50 ? console.log('Promedio mayor de 50') : console.log('Promedio es menor de 50')
}
determineIfNumberIsBiggerOrSmaller([10, 20, 50])
determineIfNumberIsBiggerOrSmaller([50, 60, 90])

//5️⃣ Camila quiere crear un string que combine dos palabras ingresadas separadas por un guion y las convierta en mayúsculas.

const createWord = (word) => {
    const combineWords = word[0].toUpperCase() + '-' + word[1].toUpperCase()
    console.log(combineWords);
}
createWord (['hola', 'caracola'])

//6️⃣ Bego tiene un array con tres precios: [150, 75, 200]. Debe sumar todos los precios y mostrar el total junto con la cantidad de productos.

const pricesList = (prices) => {
    const additionPrices = prices[0] + prices[1] + prices[2]
    console.log(`La suma de los precios es: ${additionPrices}. Y hay un total de ${prices.length} productos.`);
}
pricesList([150, 75, 200])

//7️⃣ Macarena tiene un array con tres números. Debe determinar cuál es el mayor y cuál es el menor.

//primera resolución

const biggerNumber = (numbers) => {
    const determineBiggerNumber = Math.max(numbers[0], numbers[1], numbers[2])
    const determineMinimunNumber = Math.min(numbers[0], numbers[1], numbers[2])
    console.log(`El numbero más grande es: ${determineBiggerNumber}. El número más pequeño es: ${determineMinimunNumber}.`);
}
biggerNumber([1, 2, 3])

//segunda resolución

const biggerNumbers = (numbers) => {
    console.log(`El numbero más grande es: ${Math.max(numbers[0], numbers[1], numbers[2])}. El número más pequeño es: ${Math.min(numbers[0], numbers[1], numbers[2])}.`);
}
biggerNumbers([1, 2, 3])

//8️⃣ Abby encontró un código en una pared. Debe generar un número aleatorio entre 100 y 500 y determinar si es par o impar.

const determineIfIsOdd = () => {
    const aleatoryNumber = Math.floor(Math.random()*500)
    aleatoryNumber % 2 === 0 ? console.log('El código es par') : console.log('El código es impar');
}
determineIfIsOdd()

//9️⃣ Bego tiene un array con nombres: ["Pedro", "Ana", "Luis", "Elena"]. Debe convertir todos los nombres a minúsculas y mostrarlos en un solo string separados por comas.

const namesList = (names) => {
    console.log(`${names[0]}, ${names[1]}, ${names[2]}, ${names[3]}`);
}
namesList(["Pedro", "Ana", "Luis", "Elena"])

//🔟 Sabrina quiere crear un PIN de seguridad. El PIN debe ser un array con cuatro números aleatorios entre 0 y 9.

const aleatoryNumber = () => {
    const generateAleatoryNumber = Math.floor(Math.random()*10)
    return generateAleatoryNumber
}
aleatoryNumber()
console.log(aleatoryNumber(), aleatoryNumber(), aleatoryNumber(), aleatoryNumber());

//1️⃣1️⃣ Macarena tiene un array con tres edades entre 5 y 60. Debe determinar si al menos una edad es mayor de 18.

//Dadas las edades
const identifyIfIsMoreThan18Years = (age) => {
    age[0] > 18 ||  age[1] > 18 ||  age[2] > 18 ? console.log('Al menos uno es mayor de 18') : console.log('Ninguno es mayor de 18');
}
identifyIfIsMoreThan18Years([17, 18, 50])

//Generando las edades entre 5 y 60

const aleatoryAge = () => {
    const determineAge = Math.floor(Math.random()*(60-5)+5)
    return determineAge
}
const identifyOlderThan18 = () => {
    aleatoryAge() > 18 || aleatoryAge() > 18 || aleatoryAge() > 18 ? console.log('Al menos uno es mayor de 18') : console.log('Ninguno es mayor de 18');
}
identifyOlderThan18()



//1️⃣2️⃣ Camila quiere calcular la longitud de un string ingresado y determinar si es mayor o menor a 10 caracteres.

const determineLength = (string) => {
    const calculateLength = string.length
    calculateLength > 10 ? console.log('Mayor de 10') : console.log('Menor de 10')
}
determineLength('hola caracola')


//1️⃣3️⃣ Sabrina quiere calcular un precio final aplicando un descuento. Genera un precio aleatorio entre 50 y 300. Si el precio es mayor a 200, aplica un 15% de descuento. Si no, aplica un 5%.

const applyDiscount = () => {
    const aleatoryPrice = Math.floor(Math.random()*(300-50)+50)
    aleatoryPrice > 200 ? console.log(`Se aplica un 15% a ${aleatoryPrice}, el precio se queda en ${aleatoryPrice - (aleatoryPrice*0.15)}`) : console.log(`Se aplica un 5% a ${aleatoryPrice}, el precio se queda en ${aleatoryPrice - (aleatoryPrice*0.05)}`)
}
applyDiscount()

//1️⃣4️⃣ Abby encontró un código en un refugio. Es un número aleatorio entre 1000 y 9999. Si el número es divisible por 4 y por 5, imprimirá "Código válido", si no, "Código incorrecto".

const validateCode = () => {
    const generateCode = Math.floor(Math.random()*(9999-1000)+1000)
    generateCode % 4 === 0 && generateCode % 5 === 0 ? console.log('Código válido') : console.log('Código incorrecto');
}
validateCode()

//1️⃣5️⃣ Abby encontró un diario en un refugio. Se puede leer una palabra de 4 letras y debe invertirla. Si la palabra empieza con "A", imprimirá la palabra invertida en mayúsculas, si no, en minúsculas.

const investWord = (word) => {
    word.startsWith('A') ? console.log(`${word[3].toUpperCase()}${word[2].toUpperCase()}${word[1].toUpperCase()}${word[0].toUpperCase()}`) : console.log(`${word[3].toLowerCase()}${word[2].toLowerCase()}${word[1].toLowerCase()}${word[0].toLowerCase()}`)
}
investWord('Hola')

//1️⃣6️⃣ Sabrina quiere crear un nombre de usuario a partir de un nombre ingresado. Si el nombre tiene más de 5 letras, imprimirá las primeras tres letras en mayúsculas, si no, las primeras dos en minúsculas.

const generateUserName = (name) => {
    name.length > 5 ? console.log(`${name.charAt(0).toUpperCase()}${name.charAt(1).toUpperCase()}${name.charAt(2).toUpperCase()}`) : console.log(`${name.charAt(0).toLowerCase()}${name.charAt(1).toLowerCase()}`)
    
}
generateUserName('María')
generateUserName('Maríam')

//1️⃣7️⃣ Macarena está pensando nombres para perros pero no se le ocurre ninguno, así que ha decidido dejarlo al azar. Tiene una lista de consonantes "BCDFGLMPRT" y una de vocales "AEIOUÁÉÍÓÚ", forma 3 nombres aleatorios que tengan esta combinación: 1 - VCV, 2 - CVC y el 3 - la unión del primero y el segundo

const generateAleatoryNames = () => {
    const consonantes = "BCDFGLMPRT"
    const aleatoryConsonant = Math.floor(Math.random()*consonantes.length)
    const vocals = "AEIOUÁÉÍÓÚ"
    const aleatoryVocals = Math.floor(Math.random()*vocals.length)

    console.log(firstName = vocals.charAt(aleatoryVocals) + consonantes.charAt(aleatoryConsonant) + vocals.charAt(aleatoryVocals));

    console.log(secondName = consonantes.charAt(aleatoryConsonant) + vocals.charAt(aleatoryVocals) + consonantes.charAt(aleatoryConsonant));

    console.log(firstName + secondName);
}
generateAleatoryNames()

//1️⃣8️⃣ Camila quiere generar un código de seguridad usando un array de símbolos: ["@","#","$","%","&","*","+","?"]. Debe crear un código de 4 símbolos elegidos al azar.

//como podría decirle que en vez de *8 se multiplicase por la longitud de segurity code para que coja todos los arrays.

const generateAleatoryPosition = () => {
    const aleatoryNumber = Math.floor(Math.random()*8)
    console.log(aleatoryNumber);
    
    return aleatoryNumber
}

const segurityCode = (symbols) => {
    const code = symbols[generateAleatoryPosition()] + symbols[generateAleatoryPosition()] + symbols[generateAleatoryPosition()] + symbols[generateAleatoryPosition()]
    console.log(code);
}
segurityCode(["@","#","$","%","&","*","+","?"])