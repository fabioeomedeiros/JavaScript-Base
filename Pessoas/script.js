function encontrar() {
    var anoatual = new Date().getFullYear()
    var nasc = Number(document.getElementById('id-nasc').value)
    var sexo = document.getElementsByName('sexo')
    var resposta = document.getElementById('resposta')
    var imagem = document.getElementById('imagem')
    var idade = anoatual - nasc
    var genero = ' '
    if (idade < 0 ){
        alert(`[ERRO] Ano informado maior que o ano atual`)
    } else if (idade < 4) {
        if (sexo[0].checked) {
            genero = 'masculino'
            imagem.src = 'imagens/BM.jpg'
        } else if (sexo[1].checked) {
            genero = 'feminino'
            imagem.src = 'imagens/BF.jpg'
        }
        resposta.innerHTML = `Encontramos uma pessoas de ${idade} anos de idade do sexo ${genero}`
    } else if (idade < 18) {
        if (sexo[0].checked) {
            genero = 'masculino'
            imagem.src = 'imagens/JM.jpg'
        } else if (sexo[1].checked) {
            genero = 'feminino'
            imagem.src = 'imagens/JF.jpg'
        }
        resposta.innerHTML = `Encontramos uma pessoas de ${idade} anos de idade do sexo ${genero}`
    } else if (idade < 40) {
        if (sexo[0].checked) {
            genero = 'masculino'
            imagem.src = 'imagens/AM.jpg'
        } else if (sexo[1].checked) {
            genero = 'feminino'
            imagem.src = 'imagens/AF.jpg'
        }
        resposta.innerHTML = `Encontramos uma pessoas de ${idade} anos de idade do sexo ${genero}`
    } else {
        if (sexo[0].checked) {
            genero = 'masculino'
            imagem.src = 'imagens/IM.jpg'
        } else if (sexo[1].checked) {
            genero = 'feminino'
            imagem.src = 'imagens/IF.jpg'
        }
        resposta.innerHTML = `Encontramos uma pessoas de ${idade} anos de idade do sexo ${genero}`
    }
    
}