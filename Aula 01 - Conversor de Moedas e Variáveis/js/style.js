/*
* Autor            : Guilherme Ramos Teixeira
* Data             : 23/03/2021
* Ultima alteração :
*/

//Conversor da moeda Dolar para Real!
 window.onload =  function alerta(){
 	var valorEmDolar = prompt("Qual o valor em Dolar você quer converter?")
 	var valorEmDolarNumero = parseFloat(valorEmDolar)
 	var valorEmReal = valorEmDolarNumero * 5.50
 	var valorEmRealDecimal = valorEmReal.toFixed(2) 

 	document.getElementById("resultado").innerHTML = "O Valor em Real é R$ " + valorEmRealDecimal;
}	

