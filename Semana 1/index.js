// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings. (Estou usando uma string',' pesoMinMax... )

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  6.1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, (Estou usando o comando ".toUpperCase()")


//'Husky siberiano'
const nHuskySiberiano = 'Husky siberiano'
const origemHus = 'Rússia'
const alturaCmAteHus = 60
const vidaAteHus = 15
const booleanHus = alturaCmAteHus === 60
const pesoMinMaxHus = [15,27]
console.log(`*${nHuskySiberiano.toUpperCase()};\n-Venho da ${origemHus};\n-Consigo chegar até ${alturaCmAteHus} centímetros de altura; \n-Posso viver até ${vidaAteHus} anos; \n-Tenho 60 cm? \"${booleanHus}\"`,'\n','Meu peso Mín. e Máx. são:', pesoMinMaxHus)           //true
console.log('============================================')

//'Pastor alemão'
const nPastorAlemao = 'Pastor alemão'
const origemPas = 'Alemanha'
const alturaCmAtePas = 60
const vidaAtePas = 10
const booleanPas = alturaCmAtePas > 20
const pesoMinMaxPas = [22,40]
console.log(`*${nPastorAlemao.toUpperCase()};\n-Venho da ${origemPas};\n-Consigo chegar até ${alturaCmAtePas} centímetros de altura; \n-Posso viver até ${vidaAtePas} anos; \n-Sou maior que 20 cm? \"${booleanPas}\"`,'\n','Meu peso Mín. e Máx. são:', pesoMinMaxPas)   //true
console.log('============================================')

//'Pit bull'
const nPitBull = 'Pit bull'
const origemPit = 'Estados Unidos'
const alturaCmAtePit = 60
const vidaAtePit = 14
const booleanPit = alturaCmAtePit < 80
const pesoMinMaxPit = [10,35]
console.log(`*${nPitBull.toUpperCase()};\n-Venho da ${origemPit};\n-Consigo chegar até ${alturaCmAtePit} centímetros de altura; \n-Posso viver até ${vidaAtePit} anos; \n-Sou menor que 80 cm? \"${booleanPit}\";`,'\n','Meu peso Mín. e Máx. são:', pesoMinMaxPit) //True
console.log('============================================')


// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

const mediaIdadeMaxCaes = (vidaAteHus + vidaAtePas + vidaAtePit) /3
console.log(`*Essa é a média de expectativa máxima de vida dos 6 cachulos:\n-${mediaIdadeMaxCaes}`)
const mediaAlturaCaes = (alturaCmAteHus + alturaCmAtePas + alturaCmAtePit) /3
console.log(`*Essa é a média altura máxima dos 6 cachulos:\n-${mediaAlturaCaes}`)


console.log('============================================')

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificaBooleanAllDogs =booleanHus && booleanPas && booleanPit
console.log (`*Todas as booleanDogs são verdadeiras?\n-${verificaBooleanAllDogs}`)



















