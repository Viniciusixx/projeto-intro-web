// 1. Transforme os itens que criamos nas últimas semanas em objetos.
// Exemplo
// //ANTES
//   const nome1 = "Fulano";
//   const idade1 = 33;
//   const verificouEmail1 = false; 
// //DEPOIS
// objeto1 = { 
//     nome: "Fulano", 
//     idade: 33,
//     verificouEmail: false
//   } 
// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
// 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
// Ao fim, você deve ter algo parecido com isso:
// [
//   { 
//     nome: "Fulano", 
//     idade: 33,
//     verificouEmail: false
//   },
//   { 
//     nome: "Beltrano", 
//     idade: 41,
//     verificouEmail: true
//   },
//   { 
//     nome: "Fulano", 
//     idade: 27,
//     verificouEmail: true
//   },
// 4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push


// 'Husky siberiano'
  const objetoHus= {
 nHuskySiberiano: 'Husky siberiano'.toUpperCase(),
 origemHus: 'Rússia',
 alturaCmAteHus: 60,
 vidaAteHus: 15,
 booleanHus: true,
 pesoMinMaxHus: [15,27]
 
}

//true


//'Pastor alemão'
const objetoPas={
 nPastorAlemao: 'Pastor alemão'.toUpperCase(),
 origemPas: 'Alemanha',
 alturaCmAtePas: 60,
 vidaAtePas: 10,
 booleanPas: true,
 pesoMinMaxPas: [22,40],
}


//true


//'Pit bull'
const objetoPit={
 nPitBull: 'Pit bull'.toUpperCase(),
 origemPit: 'Estados Unidos',
 alturaCmAtePit: 60,
 vidaAtePit: 14,
 booleanPit: true,
 pesoMinMaxPit: [10,35],
}
//Array vazia
const mangaHus = []

//True

if(objetoHus.booleanHus == true){
    mangaHus.push(objetoHus)
  
}else{
    alert("O \"Husky Siberiano\" não foi adicionado")
 
}

if(objetoPas.booleanPas == true){
    mangaHus.push(objetoPas)
   
}else{
    alert("O \"Pastor Alemão\" não foi adicionado")
 
}
console.log('============================================')
if(objetoPit.booleanPit == true){
    mangaHus.push(objetoPit)
  
}else{
    alert("O \"Pit Bull\" não foi adicionado")
    
}


console.log(mangaHus)


const mediaIdadeMaxCaes= (objetoHus.vidaAteHus + objetoPas.vidaAtePas + objetoPit.vidaAtePit) /3
console.log(`*Essa é a média de expectativa máxima de vida dos 3 cachulos:\n*${mediaIdadeMaxCaes}`)
const mediaAlturaCaes = (objetoHus.alturaCmAteHus + objetoPas.alturaCmAtePas + objetoPit.alturaCmAtePit) /3
console.log(`*Essa é a média altura máxima dos 3 cachulos:\n*${mediaAlturaCaes}`)


console.log('============================================')


const verificaBooleanAllDogs = objetoHus.booleanHus && objetoPas.booleanPas && objetoPit.booleanPit
console.log (`*Todas as booleanDogs são verdadeiras?\n*${verificaBooleanAllDogs}`)



















