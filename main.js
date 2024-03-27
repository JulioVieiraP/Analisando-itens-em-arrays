document.addEventListener("DOMContentLoaded", () => {
    const Btn = document.querySelector("#Button")
    const Btn2 = document.querySelector('#Finalizar')

    Btn.addEventListener("click", () => {
        const numero = parseInt(document.querySelector("#numero").value)
        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
        } else {
            adicionarNumero(numero)
        }
    })

    Btn2.addEventListener("click", () => {
        if (num.length < 2) {
            alert("Para finalizar, você precisa de pelo menos dois números na lista.");
        } else {
            Finalizar()
        }
    })
})

let num = []

function adicionarNumero(num1) {
    const numero = document.querySelector("#numero")
    const resultado = document.querySelector("#Resultado")
    numero.value= ""
    resultado.innerHTML= ""

    if (!num.includes(num1)) {
        if (num1 <= 100 && num1 > 0) {
            num.push(num1)
            const res = document.createElement("option")
            res.text = `Valor ${num1} adicionado`
            document.querySelector("#adicionados").appendChild(res)
        } else {
            alert("O número tem que estar entre 1 e 100")
        }
    } else {
        alert(`O número ${num1} já está na lista, adicione um número diferente`)
    }
}

function Finalizar() {
    const resultado = document.querySelector("#Resultado");
    resultado.innerHTML = "";

    adicionarParagrafo(resultado, `O total de itens no array é ${num.length}`);

    const maiorNumero = Math.max(...num);
    adicionarParagrafo(resultado, `O maior número do array é ${maiorNumero}`);

    const menorNumero = Math.min(...num)
    adicionarParagrafo(resultado, `O menor número do array é ${menorNumero}`)

    const soma = num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    adicionarParagrafo(resultado, `A soma dos valores é ${soma}`);

    const media = soma / num.length
    adicionarParagrafo(resultado, `A média dos valores é ${media}`)

}

function adicionarParagrafo(resultado, texto) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    resultado.appendChild(paragrafo);
}
