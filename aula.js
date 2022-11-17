const button = document.getElementById('button')
const notificacao = document.getElementById('notificacoes')

const mensagen = [
    ' Há um buraco negro supermassivo no coração de cada galáxia', 
    '95% do universo é invisível',
    ' O Universo tem, segundo a astrofísica, mais de 15 bilhões de anos.',
    'Um pulsar é uma estrela de nêutrons de rotação rápida que emite grandes quantidades de radiação eletromagnética (luz, raios-x, ondas de rádio, etc.) e jatos de partículas.',
    ' Um ano-luz é a distância que a luz percorre, no vácuo, durante um ano.',
    'Os buracos negros são formados no fim da vida das estrelas massivas, pois elas sofrem um intenso colapso gravitacional, reduzindo totalmente o tamanho.'
] 

button.addEventListener('click', () => criarNotificacao())

function criarNotificacao(){
    const noti = document.createElement('div')/* <div></div> */
    noti.classList.add('notificacao') /* <div class='notificacao'></div> */
    
    noti.innerText = getRandomMensagem()

    notificacao.appendChild(noti)

    setTimeout(() => {
        noti.remove()
    },8000)
}

function getRandomMensagem() {
    return mensagen[Math.floor(Math.random() * mensagen.length)]
}