var textoInput = document.getElementById("texto-input");
var botCriptografar = document.getElementById("botao-Criptografar");
var botDescriptografar = document.getElementById("botao-Descriptografar");
var botCopiar = document.getElementById("copiar")

botCriptografar.onclick = function() {
    var texto = textoInput.value;
  
    texto = texto.replace(/[a]/gi, "ai");
    texto = texto.replace(/[e]/gi, "enter");
    texto = texto.replace(/[i]/gi, "imes");
    texto = texto.replace(/[o]/gi, "obter");
    texto = texto.replace(/[u]/gi, "ufat");
    var texto1 = document.querySelector(".texto1");
    var texto2 = document.querySelector(".texto2");
    texto1.textContent = texto;
    texto2.textContent = "Texto criptografado com sucesso!";
  };
  botDescriptografar.onclick = function() {
    var texto = textoInput.value;
    
    texto = texto.replace(/ufat/gi, "u");
    texto = texto.replace(/obter/gi, "o");
    texto = texto.replace(/imes/gi, "i");
    texto = texto.replace(/enter/gi, "e");
    texto = texto.replace(/ai/gi, "a");
    var texto1 = document.querySelector(".texto1");
    var texto2 = document.querySelector(".texto2");
    texto1.textContent = texto;
    texto2.textContent = "Texto descriptografado com sucesso!";
  };
  botCopiar.onclick = function() {
    var texto1 = document.querySelector(".texto1");
    var textoCriptografado = texto1.textContent;
    navigator.clipboard.writeText(textoCriptografado)
    .then(function() {
      console.log('Texto copiado para a área de transferência!');
    }, function() {
      console.error('Erro ao copiar o texto!');
    });
  };