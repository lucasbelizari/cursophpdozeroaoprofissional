function acao() {
  document.write("Executou...<br/>");
}
//setInterval(acao, 250);
//setTimeout(acao, 5000);
var timer  = setInterval(acao, 2000);
clearInterval(timer);
clearTimeout(timer);
