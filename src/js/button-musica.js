const botao = document.querySelector(".button-musica-interno")
const linhaDoButton1 = document.querySelectorAll(".linha-do-button1")
const linhaDoButton2 = document.querySelectorAll(".linha-do-button2")
const audioLight = document.getElementById('myAudioLight')

botao.addEventListener("click", function (){
    linhaDoButton1.forEach(linha => {
        if (linha.classList.contains("ativar-musica")){
            linha.classList.remove("ativar-musica")
            linha.classList.add("desativar-musica")
            audioLight.pause()
        } else {
            linha.classList.remove("desativar-musica")
            linha.classList.add("ativar-musica")
            audioLight.play()
            audioLight.volume = 0.1
        }
    })

    linhaDoButton2.forEach(linha => {
        if (linha.classList.contains("ativar-musica")){
            linha.classList.remove("ativar-musica")
            linha.classList.add("desativar-musica")
            audioLight.pause()
        } else {
            linha.classList.remove("desativar-musica")
            linha.classList.add("ativar-musica")
            audioLight.play()
        } 
    })
})