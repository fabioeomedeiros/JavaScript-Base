function Contar() {
    var inicio = Number(document.getElementById('id-i').value)
    var fim = Number(document.getElementById('id-f').value)
    var passo = Number(document.getElementById('id-p').value)
    var display = document.getElementById('display')
    // display.innerHTML = `${passo}`
   
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('[ERRO]: Fantam DADOS')
    } else {
        var i = inicio
        if (inicio < fim) {
            while (i <= fim) {
                display.innerHTML += `     ${i} \u{27A1}     `
                i += passo
            }
        } else if (inicio > fim) {
            while (i >= fim) {
                display.innerHTML += `     ${i} \u{27A1}     `
                i -= passo
            }
    
        } else {
            alert('[ERRO]: Os valores de INÍCIO e FIM devem ser diferentes')
        }
    }
    display.innerHTML += `Fim`
}

function gerarTabuada() {
    var n = Number(document.getElementById('id-n').value)
    var tabuada = document.getElementById('id-tab')
    tabuada.innerHTML = ''
    for (var i = 1; i <= 10; i++) {
        var item = document.createElement('option')
        item.text = `${i} x ${n} = ${i*n}`
        item.value = `tab${i}`
        tabuada.appendChild(item)
    }

}