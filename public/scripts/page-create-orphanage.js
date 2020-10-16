
const map = L.map('mapid').setView([-27.2165129,-49.6445713,15.75], 15);


L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;


map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)


    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
});


// add photo's field

function addPhotoField() {
    // pegar o container de photos
    const container = document.querySelector('#images')

    // duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo esta vazio, se n n add
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // limpar o campo antes de add
    input.value = ""

    //adicionar o clone ao container #imagem
    container.appendChild(newFieldContainer)
}

// delete field

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}
 
// select do sim e nao

function toggleSelect(event) {

    // retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active')) // versao menor da arrow function
    // colocar a class .active no botao clicado

    // pegar button clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}

