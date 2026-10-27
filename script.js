const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formJogo')
const lista = document.getElementById('listarJogos')
const mensagemVazia = document.getElementById('mensagemVazia')

btnCadastrar.addEventListener('click', () => {
    modal.showModal()
})

btnCancelar.addEventListener('click', () => {
    modal.Close()
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const jogo = document.getElementById('jogo').value.trim()
    const developer = document.getElementById('developer').value.trim()
    const genero = document.getElementById('genero').value.trim()
    const imagem = document.getElementById('imagem').value.trim()
    const preco = Number(document.getElementById('preco').value)

    criarCard(jogo, developer, genero, imagem, preco)
    form.reset()
    modal.close()
})

function criarCard(jogo, developer, genero, imagem, preco){
    mensagemVazia.hidden = true;
    const card = document.createElement('article')
    const capa = document.createElement('div')
    capa.classList.add('capa')
    const imagemCapa = document.createElement('img')
    imagemCapa.src = imagem
    capa.appendChild(imagemCapa)
    const info = document.createElement('div')
    info.classList.add('info-disco')
    const titulo = document.createElement('h3')
    titulo.textContent = jogo
    const nomeDeveloper = document.createElement('p')
    nomeDeveloper.textContent = 'Developer: ' + developer
    const nomeGenero = document.createElement('p')
    nomeGenero.textContent = 'Gênero: ' + genero
    const valor = document.createElement('strong')
    valor.classList.add('preco')
    valor.textContent = preco.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})
    info.append(titulo, nomeDeveloper, nomeGenero, valor)
    card.append(capa, info)
    lista.append(card)
}