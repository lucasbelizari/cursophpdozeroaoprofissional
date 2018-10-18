var nome = "Lucas"
document.write(nome)
var lista = ["Arroz", "Feijão", "Macarrão", "Carne", 320];
lista
["Arroz", "Feijão", "Macarrão", "Carne", 320]
lista[0];
"Arroz"
lista[1];
"Feijão"
lista[2];
"Macarrão"
lista.length
5
lista.indexOf("Feijão");
1
lista.indexOf("alskdjhf");
-1
lista
(5) ["Arroz", "Feijão", "Macarrão", "Carne", 320]
lista.join(","); //Transforma o array em string
"Arroz,Feijão,Macarrão,Carne,320"
lista.join(" / ");
"Arroz / Feijão / Macarrão / Carne / 320"
lista.join("; ");
"Arroz; Feijão; Macarrão; Carne; 320"
lista.pop(); // Apaga o último item
320
lista
(4) ["Arroz", "Feijão", "Macarrão", "Carne"]
lista
(4) ["Arroz", "Feijão", "Macarrão", "Carne"]
lista.shift();//Apaga o primeiro item
"Arroz"
lista
(3) ["Feijão", "Macarrão", "Carne"]
lista.push("Azeitona");//Adiciona um item ao array
4
lista
(4) ["Feijão", "Macarrão", "Carne", "Azeitona"]

if(lista.indexOf("Feijão") > -1) {
    alert("Tem na lista");
  } else {
    alert("Não tem na lista");
  }

if(lista.indexOf("ddddFeijão") > -1) {
    alert("Tem na lista");
  } else {
    alert("Não tem na lista");
  }
