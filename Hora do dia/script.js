function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var cre = document.getElementById('creditos')
    var fundo = document.getElementById('fundo')
    var hora = new Date().getHours()
    var min = new Date().getMinutes()
    
    msg.innerHTML = `${hora}h e ${min}min`

    if (hora < 5) {
        imagem.src = 'FotodeSanndyAnghannoPexels.png'
        cre.innerHTML = 'Foto de Sanndy Anghan nov Pexels'
        document.body.style.background = '#262626'
    } else if (hora < 12) {
        imagem.src = 'FotodeWarrenBlakenoPexels.png'
        cre.innerHTML = 'Foto de Warren Blake no Pexels'
        document.body.style.background = '#a3a3ae'
    } else if (hora < 16) {
        imagem.src = 'FotodeIgnacioPalesnoPexels.png'
        cre.innerHTML = 'Foto de Ignacio Palés no Pexels'
        document.body.style.background = '#525f63'
    } else if (hora < 19) {
        imagem.src = 'FotodeAlexeyDemidovnoPexels.png'
        cre.innerHTML = 'Foto de Alexey Demidov no Pexels'
        document.body.style.background = '#8c6a45'
    } else {
        imagem.src = 'FotodeEnricCruzLopeznoPexels.png'
        cre.innerHTML = 'Foto de Enric Cruz López no Pexels'
        document.body.style.background = '#0b1b30'
    }
}