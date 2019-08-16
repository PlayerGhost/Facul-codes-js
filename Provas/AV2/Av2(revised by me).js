var c = 1;
var inv;
var vi;
var rm = 0;
var ti = 0;
var tj = 0;

while (c > 0)
{
	//ENTRADA
	c = prompt("Informe o seu código.");
		if (c > 0)
		{
			inv = prompt("Informe o tipo de investimento.");
			vi = parseFloat(prompt("Informe o valor investido."));
			ti += vi; //TOTAL INVESTIDO
		}

	//RENDIMENTO MENSAL
	if (inv == 1 && c > 0)
	{
		rm = (1.5 / 100) * vi;
		tj += rm;
		alert("O rendimento mensal foi de R$ " + rm);
	}

	if (inv == 2 && c > 0)
	{
		rm = (2 / 100) * vi;
		tj += rm;
		alert("O rendimento mensal foi de R$ " + rm);
	}

	if (inv == 3 && c > 0)
	{
		rm = (4 / 100) * vi;
		tj += rm;
		alert("O rendimento mensal foi de R$ " + rm);
	}

}

//SAIDA
document.write("O total investido foi de R$ " + ti + "<br>");
document.write("O total de juros pago foi de R$ " + tj  + "<br>");