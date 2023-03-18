const numeros = document.querySelectorAll(".number")
const operadores = document.querySelectorAll(".operador")
const tela = document.querySelector(".calculadoraTopo")
const equal = document.querySelector(".igual")
const del = document.querySelector(".del")
const reset = document.querySelector(".reset")

let firstOpe = ""
let secondOpe = ""
let ope = ""
let result = 0

function calc (primeiroNumero,segundoNumero,operador){
    if(operador === "x"){
        result = parseInt(primeiroNumero)*parseInt(segundoNumero)
    }
    else if(operador === "/"){
        result = parseInt(primeiroNumero)/parseInt(segundoNumero)
    }
    else if(operador === "+"){
        result = parseInt(primeiroNumero)+parseInt(segundoNumero)
    }
    else if(operador === "-"){
        result = parseInt(primeiroNumero)-parseInt(segundoNumero)
    }
}

numeros.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const value = event.target.innerText
        if(ope ===""){
            firstOpe += value
            tela.innerHTML = `${firstOpe}`
        }
        else{
            secondOpe += value
            tela.innerHTML = `${secondOpe}`
        }
    })
})

operadores.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        const op = event.target.innerText
            ope = op
            tela.innerHTML = `${ope}`
    })
})

del.addEventListener("click",()=>{
    if(ope===""){

        firstOpe = firstOpe.substring(0, firstOpe.length -1)
        tela.innerHTML = `${firstOpe}`
        if(firstOpe.length===0){
            tela.innerHTML = `${result}`
        }
    }
    else{

        secondOpe = secondOpe.substring(0, secondOpe.length -1)
        tela.innerHTML = `${secondOpe}`
    }
})

reset.addEventListener("click",()=>{
    firstOpe = ""
    secondOpe = ""
    ope = ""
    result = 0
    tela.innerHTML = `${result}`
})

equal.addEventListener("click",()=>{
    if(firstOpe===""){
        tela.innerHTML = `0`
    }
    else if(ope===""){
        tela.innerHTML = `${firstOpe}`
    }
    else{
        calc(firstOpe,secondOpe,ope)
        tela.innerHTML = `${result}`
        firstOpe = ""
        secondOpe = ""
        ope = ""
        result = 0
    }
})
