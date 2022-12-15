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
    det.types = [pok.types[0].type.name, pok.types[1].type.name]
    det.weight = Number(pok.weight)
    det.height = Number(pok.height)
    return det



}
function pegaOnomeAe(algo){
    return algo.base_stat
}

function newHtml (algoai){
return `
<div class='RightContainer'>
    <h1>${algoai.nome}</h1>
    <img src= '${algoai.img}' alt = "imagem pokemon" class = "img"/>
</div>

<div class = 'LeftContainer'>
    <div class = "contain">
        <h2>Stats</h2>
        <ol class = 'stats'>
            <li class = "listItem">HP: ${algoai.stats[0]}</li>
                <hr/>
            <li class = "listItem">Atack: ${algoai.stats[1]}</li>
                <hr/>
            <li class = "listItem">Defense: ${algoai.stats[2]}</li>
                <hr/>
            <li class = "listItem">Especial Atack: ${algoai.stats[3]}</li>
                <hr/>
            <li class = "listItem">Especial Defense: ${algoai.stats[4]}</li>
                <hr/>
            <li class = "listItem">Speed: ${algoai.stats[5]}</li>
        </ol>
        </div>
        
        
<div class = "contain">
        <h2>About</h2>
        <ol class =  "other">
            <li class = "listItem">tipos:</li>
                <hr/>
            <li class = "listItem"> ${algoai.types}</li>
                <hr/>
            <li class = "listItem">outros:</li>
                <hr/>
            <li class = "listItem">peso: ${algoai.weight/10}Kg</li>
                <hr/>
            <li class = "listItem">altura: ${algoai.height/10}m</li> 
        </ol>
    </div>
</div>
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