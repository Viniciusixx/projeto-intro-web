//SEMANA 3
// 'Husky siberiano'
const cachorro1= {
    nome: 'Husky Siberiano',
    origem: 'Rússia',
    altura: 60,
    vida: 15,
    boolean: true,
    foto:"husky-siberiano-10.png",
    link:'https://love.doghero.com.br/racas/husky-siberiano/',
    pesoMinMax: [15,27]
    
   }
  

   //true
   
   
   //'Pastor alemão'
   const cachorro2={
    nome: 'Pastor alemão',
    origem: 'Alemanha',
    altura: 60,
    vida: 10,
    boolean: true,
    foto:'pastor-alemao-10.jpg',
    link:'https://love.doghero.com.br/racas/pastor-alemao/',
    pesoMinMax: [22,40]
   }
   
   
   //true
   
   
   //'Pit bull' 
   const cachorro3={
    nome: 'Pit bull',
    origem: 'Estados Unidos',
    altura: 60,
    vida: 14,
    boolean: true,
    foto: 'pitbull-marrom.png',
    link: 'https://love.doghero.com.br/racas/pit-bull/',
    pesoMinMax: [10,35]
   }

    cachorro1.nome = cachorro1.nome.toLocaleUpperCase()
    cachorro2.nome = cachorro2.nome.toLocaleUpperCase()
    cachorro3.nome = cachorro3.nome.toLocaleUpperCase()
   //Array vazia
   const arrayVazia = []
   
   //True
   
   if(cachorro1.boolean == true){
    arrayVazia.push(cachorro1)
     
   }else{
       alert("O \"Husky Siberiano\" não foi adicionado")
    
   }
   
   if(cachorro2.boolean == true){
       arrayVazia.push(cachorro2)
      
   }else{
       alert("O \"Pastor Alemão\" não foi adicionado")
    
   }
   console.log('============================================')
   if(cachorro3.boolean == true){
       arrayVazia.push(cachorro3)
     
   }else{
       alert("O \"Pit Bull\" não foi adicionado")
       
   }
   
   
//    console.log(arrayVazia)
   
   
   const mediaIdadeMaxCaes= (cachorro1.vida + cachorro2.vida + cachorro3.vida) /3
   console.log(`*Essa é a média de expectativa máxima de vida dos 3 cachulos:\n*${mediaIdadeMaxCaes}`)
   const mediaAlturaCaes = (cachorro1.altura + cachorro2.altura + cachorro3.altura) /3
   console.log(`*Essa é a média altura máxima dos 3 cachulos:\n*${mediaAlturaCaes}`)
   
   
   console.log('============================================')
   
   
   const verificaBooleanAllDogs = cachorro1.boolean && cachorro2.boolean && cachorro3.boolean
   console.log (`*Todas as booleanDogs são verdadeiras?\n*${verificaBooleanAllDogs}`);
 


   


// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração.

 
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
console.log(alterarArray(arrayVazia))


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
for(cachorro of arrayVazia){
    for(propriedade in cachorro){
        console.log(`${propriedade}: ${cachorro[propriedade]}`)
    }
    console.log("---------------------")
}



// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
console.log("Enunciado 3:\n")
for(cachorro of arrayVazia){
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
// console.log(recebeObjeto(cachorro1, cachorro2, cachorro3))




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
// console.log("Enunciado 4:\n")
// const pesquisaNomes = buscandoItens(arrayVazia, prompt("Digite um nome").toUpperCase().trim())
// console.log(pesquisaNomes)

//
//

//

//

//

//

//

//


//

//

//


//


const lista = document.querySelector(".centrodiv")
arrayVazia.filter(caes =>{
    function listarCaes(){
        lista.innerHTML += `<div class="cachorrosAll">
        <a id="classeA" href="${caes.link}" target="_blank"><img src="./fotos/${caes.foto}"></a>
        <h3><strong><a id="classeA" href="${caes.link}" target="_blank">${caes.nome}</a></strong></h3>
        <p class="inicial"><strong>Origem</strong>: ${caes.origem}</p>
        <p><strong>Altura máxima</strong>: ${caes.altura}</p>
        <p><strong>Expectativa de vida</strong>: ${caes.vida} anos</p>
        <p><strong>Peso mínimo</strong>: ${caes.pesoMinMax[0]} Kg;</p>
        <p class="final"><strong>Peso máximo</strong>: ${caes.pesoMinMax[1]} Kg;</p>
    
    </div>`
    }
    listarCaes()
})


// const buscaNome = document.getElementById("id-busca").toLowerCase()
// arrayVazia.filter()


    function buscaDoCao(event){
        event.preventDefault()
        let novaLista = document.getElementById('id-centrodiv')
        let nomeCao = document.getElementById('id-busca').value.toLocaleUpperCase()
        for(let i=0;i<arrayVazia.length;i++){
        if(nomeCao === arrayVazia[i].nome){
            return (novaLista.innerHTML = `<div class="cachorrosAll">
            <a id="classeA" href="${arrayVazia[i].link}" target="_blank"><img src="./fotos/${arrayVazia[i].foto}"></a>
            <h3><strong><a id="classeA" href="${arrayVazia[i].link}" target="_blank">${arrayVazia[i].nome}</a></strong></h3>
            <p class="inicial"><strong>Origem</strong>: ${arrayVazia[i].origem}</p>
            <p><strong>Altura máxima</strong>: ${arrayVazia[i].altura}</p>
            <p><strong>Expectativa de vida</strong>: ${arrayVazia[i].vida}</p>
            <p><strong>Peso mínimo</strong>: ${arrayVazia[i].pesoMinMax} Kg;</p>
            <p class="final"><strong>Peso máximo</strong>: ${arrayVazia[i].pesoMinMax} Kg;</p>
        
        </div>`)
        }

        }

        alert("Nada foi encontrado!");
        document.getElementById('id-busca').value = "";
        return;
    }


    buscaDoCao()