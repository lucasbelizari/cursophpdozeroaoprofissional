function acao() {
     document.write("Executou...<br/>");
}
//setInterval(acao, 2000); 
//a forma de parar o setInterval é colocar ele dentro de uma variável // clearInterval(timer);

var timer = setInterval(acao, 2000);

//setTimeout(acao,2000); // clearTimeout();