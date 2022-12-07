const div = document.getElementById('principia')
const url = window.location.href
const split = url.split('=')
const id  = split[1]
const newURL = 'https://pokeapi.co/api/v2/pokemon/'+id
class pokdetail {
    nome;
    img;
    stats;
    ablts;
    moves
}

function messToPOK (pok){
    const det = new pokdetail
    det.nome = pok.name
    det.stats = pok.stats.map(pegaOnomeAe)
    det.img = pok.sprites.other.dream_world.front_default
    det.ablts= pok.abilities
    det.moves = pok.moves 
    return det



}
function pegaOnomeAe(algo){
    return algo.base_stat
}

function newHtml (algoai){
return `
<div class='RightContainer'>
${algoai.nome}

<ol class = 'stats'>
<li>${algoai.stats[0]}</li>
<li>${algoai.stats[1]}</li>
<li>${algoai.stats[2]}</li>
<li>${algoai.stats[3]}</li>
<li>${algoai.stats[4]}</li>
<li>${algoai.stats[5]}</li>
</ol>

</div>

<div class = 'LeftContainer'>
<img src= '${algoai.img}' alt = "imagem pokemon"/>
</div>
${algoai.abilities}
${algoai.moves}







`
}

function arrumaí () {
   return fetch(newURL)
        .then((response) => response.json())
        .then(messToPOK)
//        .then((detReq)=> Promise.all(detReq))
        .then((pokDet)=>pokDet)
}
const sla = arrumaí().then((poke=[])=>{
    const html = newHtml(poke)
    div.innerHTML = html
})

console.log(sla)






