let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")
let resposta4 = document.getElementById("resposta4")
let resposta5 = document.getElementById("resposta5")
let resposta6 = document.getElementById("resposta6")
let resposta7 = document.getElementById("resposta7")
let resposta8 = document.getElementById("resposta8")
let resposta9 = document.getElementById("resposta9")
let resposta10 = document.getElementById("resposta10")

function calcula1(at1){
    let res = 5 + 3 * 4 - 8 / 2
    resposta1.innerHTML = "O resultado é = " + res.toFixed(2)
}
function calcula2(){
    let res2 = 9 - 4 * 9 / 3 + 6 / 2
    resposta2.innerHTML = "O resultado é = " + res2.toFixed(2)
}
function calcula3(){
    let res3 = 5.5 + 3.3 / 2.0 * 4.8 + 6.1 
    resposta3.innerHTML = "O resultado é = " + res3.toFixed(2)
}
function calcula4(){
    let res4 = 7.9 * 3.2 + 5.2 / 3.1 + 7.9  
    resposta4.innerHTML = "O resultado é = " + res4.toFixed(2)
}
function calcula5(){
    let res5 = (5 + 3 ) * 5 / 2 + 8 * 3  
    resposta5.innerHTML = "O resultado é = " + res5.toFixed(2)
}
function calcula6(){
    let res6 = (7 - 2 ) + 9 / ( 2 + 1 ) * 8  
    resposta6.innerHTML = "O resultado é = " + res6.toFixed(2)
}
function calcula7(){
    let res7 = (39 - 27) / (6.3 - 3.5) 
    resposta7.innerHTML = "O resultado é = " + res7.toFixed(2)
}
function calcula8(){
    let res8 = (7.5 + 6.3 + 8.1) / 3
    resposta8.innerHTML = "O resultado é = " + res8.toFixed(1)
}
function calcula9(){
    let res9 = 589 + 1973 + 1470 + 2420 + 744 / 5
    resposta9.innerHTML = "O resultado é = " + res9.toFixed(1) + " gramas ou 6,6 kg"
}
function calcula10(){
    let pq = Number(document.getElementById("pq").value)
    let md = Number(document.getElementById("md").value)
    let hg = Number(document.getElementById("hg").value)
    let res10 = pq * 19 + md * 22 + hg * 17
    resposta10.innerHTML = "O valor total da compra é = " + res10.toFixed(1)
}