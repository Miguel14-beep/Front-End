console.log("JS externo ok");

function soma(){

    let n1 = Number(document.getElementById("num1").value);

    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 + n2;


    console.log("o resultado é: " + resultado);

    let resultadoSoma = document.getElementById("resultado");
    resultadoSoma.value = resultado;
}

function subtracao(){

    let n1 = Number(document.getElementById("num1").value);

    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 - n2;


    console.log("o resultado é: " + resultado);

    let resultadoSoma = document.getElementById("resultado");
    resultadoSoma.value = resultado;
}

function divisao(){

    let n1 = Number(document.getElementById("num1").value);

    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 / n2;


    console.log("o resultado é: " + resultado);

    let resultadoSoma = document.getElementById("resultado");
    resultadoSoma.value = resultado;
}

function multiplicacao(){

    let n1 = Number(document.getElementById("num1").value);

    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 * n2;


    console.log("o resultado é: " + resultado);

    let resultadoSoma = document.getElementById("resultado");
    resultadoSoma.value = resultado;
}