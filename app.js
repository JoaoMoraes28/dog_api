'use strict'

const input = document.getElementById('textoInput')
const button = document.getElementById('buscar')
const lista = document.getElementById('listaDogs')

async function buscarImagens(raca) {
    let cardsRemovidos = document.querySelectorAll('.containerImg')
    let i = 0

    cardsRemovidos.forEach(() => {
        cardsRemovidos[i].parentNode.removeChild(cardsRemovidos[i])
        i++
    })

    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()

    if (imagens.message.length == 45) {
        alert('Nenhum cachorro dessa raça foi encontrado')

    } else {
        const containerImgs = document.getElementById('containerDog')

        for (let i = 0; i < imagens.message.length; i++) {
            const containerImg = document.createElement('div')
            containerImg.classList.add('containerImg')
            containerImgs.appendChild(containerImg)

            const img = document.createElement('img')
            img.classList.add('imgDog')
            img.src = imagens.message[i]
            containerImg.appendChild(img)
        }

    }
}

document.addEventListener('click', () => {
    if (!input.contains(event.target) && !lista.contains(event.target)) {
        lista.style.display = 'none'
    }
})

input.addEventListener('click', () => {
    lista.style.display = 'flex'
})

button.addEventListener('click', () => {
    let raca = String(input.value)
    raca = raca.toLowerCase()
    buscarImagens(raca)
})

