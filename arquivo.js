function mostrar () {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var d = document.getElementById ("d")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'manhasf.png'
        document.body.style.background = "#F4A460"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        d.innerHTML = `Boa tarde`
        img.src = 'tardesf.png'
        document.body.style.background =  'rgb(234, 132, 109)'
    } else {
        // Boa noite!
        d.innerHTML = `Boa noite`
        img.src = 'noitesf.png'
        document.body.style.background = 'rgb(108, 30, 77)'
    }
}