console.log("JS externo 2 ok");

function calculaMedia(){
    //console.log("OK");
    let soma = 0;
    let media = 0;

    let valores = document.getElementById("valores").value;
    console.log(valores);

    let array_numeros = valores.split("/");
    console.log(array_numeros.length);

    for(let i = 0; i < array_numeros.length; i++){
        
        soma += Number(array_numeros[i]);
    }
    media = soma / Number(array_numeros.length);
    //console.log(soma);
    //console.log(media);
    
    let p = document.getElementById("media");
    p.innerText = "A media é: " + media;
}