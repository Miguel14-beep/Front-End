let n1, n2;

function mostrarResul(resultado){
    let resultadoSoma = document.getElementById("resultado");
    resultadoSoma.value = resultado;
   
    console.log("o resultado é: " + resultado);

}

function pegarValor(){
        n1 = Number(document.getElementById("num1").value);

        n2 = Number(document.getElementById("num2").value);
}



function soma(){
    
        pegarValor();

        let resultado = n1 + n2;


        console.log("o resultado é: " + resultado);

        mostrarResul(resultado);

}
function subtracao(){
        pegarValor();

        let resultado = n1 - n2;


        console.log("o resultado é: " + resultado);

        mostrarResul(resultado);

} 
function divisao(){
        pegarValor();

        let resultado = n1 / n2;


        console.log("o resultado é: " + resultado);

        mostrarResul(resultado);

}function multiplicacao(){
        pegarValor();

        let resultado = n1 * n2;


        console.log("o resultado é: " + resultado);

        mostrarResul(resultado);
}

