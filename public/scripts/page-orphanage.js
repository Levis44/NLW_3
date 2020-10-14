
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-27.2165129,-49.6445713,15.75], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]

})


// create and add marker
L.marker([-27.2165129,-49.6445713,15.75], { icon })
 .addTo(map) 
 

//  image gallerry

function selectImage(event) {
    const button = event.currentTarget
    
    // remover todas as classe active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach((button) => {
        button.classList.remove("active")
    })


    // selecionar a image clicada e o container
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container

    imageContainer.src = image.src


    // adicionar a classe .active
    button.classList.add('active')
}

    