//SEMANA 3
// 'Husky siberiano'
const objetoHus= {
    nome: 'Husky Siberiano'.toUpperCase(),
    origem: 'Rússia',
    alturaCmAteHus: 60,
    vidaAteHus: 15,
    booleanHus: true,
    pesoMinMax: [15,27]
    
   }
  

   //true
   
   
   //'Pastor alemão'
   const objetoPas={
    nome: 'Pastor alemão'.toUpperCase(),
    origem: 'Alemanha',
    alturaCmAtePas: 60,
    vidaAtePas: 10,
    booleanPas: true,
    pesoMinMax: [22,40]
   }
   
   
   //true
   
   
   //'Pit bull'
   const objetoPit={
    nome: 'Pit bull'.toUpperCase(),
    origem: 'Estados Unidos',
    alturaCmAtePit: 60,
    vidaAtePit: 14,
    booleanPit: true,
    pesoMinMax: [10,35]
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
   
   
//    console.log(mangaHus)
   
   
   const mediaIdadeMaxCaes= (objetoHus.vidaAteHus + objetoPas.vidaAtePas + objetoPit.vidaAtePit) /3
   console.log(`*Essa é a média de expectativa máxima de vida dos 3 cachulos:\n*${mediaIdadeMaxCaes}`)
   const mediaAlturaCaes = (objetoHus.alturaCmAteHus + objetoPas.alturaCmAtePas + objetoPit.alturaCmAtePit) /3
   console.log(`*Essa é a média altura máxima dos 3 cachulos:\n*${mediaAlturaCaes}`)
   
   
   console.log('============================================')
   
   
   const verificaBooleanAllDogs = objetoHus.booleanHus && objetoPas.booleanPas && objetoPit.booleanPit
   console.log (`*Todas as booleanDogs são verdadeiras?\n*${verificaBooleanAllDogs}`);
 


   


// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração.


// Exemplo:
// //ANTES 
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

// //DEPOIS
// FULANO
// idade: 33
// verificou email?: false
// projetos: "Projeto de HTML,Projeto de CSS,Projeto React" 
 
const alterarArray=(array)=>{
    let novoarray = [...array]
    for(objeto in novoarray){
        novoarray[objeto]={...novoarray[objeto]}
    }
    for(i=0; i<novoarray.length; i++){
        let string = novoarray[i].pesoMinMax.toString()
        novoarray[i].pesoMinMax=string
    }
    return novoarray
}
console.log("Enunciado 1:\n")
console.log(alterarArray(mangaHus))


//Ex da daniela



// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


// //ANTES 
// console.log(elementos[0].item);

// //DEPOIS
// FULANO
// for(elemento in elementos){
//   console.log(elemento.item);
// }
console.log("Enunciado 2:\n")
for(cachorro of mangaHus){
    for(propriedade in cachorro){
        console.log(`${propriedade}: ${cachorro[propriedade]}`)
    }
    console.log("---------------------")
}



// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
console.log("Enunciado 3:\n")
for(cachorro of mangaHus){
    for(propriedade in cachorro){
        console.log(`${cachorro[propriedade]}`)
    }
    console.log("---------------------")
}


// const recebeObjeto=(objeto)=>{
//     let string = ""
//     for(let i in objeto){
//         string+= `${i}: ${objeto[i]}`;        
//     }
//     return string
// }
// console.log("Enunciado 3:\n")
// console.log(recebeObjeto(objetoHus, objetoPas, objetoPit))




// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function buscandoItens(array, string){
    for(objeto of array){
        if(objeto.nome === string){
            return objeto
        }else{ 
            alert("Seu produto não foi encontrado.")
        }
    }
    
    
}
console.log("Enunciado 4:\n")
const pesquisaNomes = buscandoItens(mangaHus, prompt("Digite um nome").toUpperCase().trim())
console.log(pesquisaNomes)