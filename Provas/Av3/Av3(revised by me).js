function checkCode(cs, code)
{
	var v = code;
	var first = 0;
	var last = v.length - 1;
	var mid;
	var r = false;

	while (first <= last)
	{
		mid = Math.floor((first + last) / 2);

		if (cs == v[mid])
		{
			break;
		}

		if (cs > v[mid])
		{
			first = mid + 1;
		}

		if (cs < v[mid])
		{
			last = mid -1;
		}
	}

	if (cs == v[mid])
	{
		r = true;
		idp = mid;
	}

	else
	{
		r = false;
	}

	return r;
}

var cp = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
var np = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var stt = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var cpf; 
var cpb;
var quantidade;
var qt = 0;
var idp;
var ma = {nome: np[0], qts: stt[0]};
var me = {nome: np[0], qts: stt[0]};

while (cpf != 0)
{
	cpf = parseInt(prompt("Informe seu CPF."));

	if (cpf != 0)
	{
		
		cpb = parseInt(prompt("Informe o código do produto que voce deseja comprar."));
		

		if (checkCode(cpb, cp))
		{		
			quantidade = parseInt(prompt("Informe a quantidade do produto que você deseja comprar."));

			if (quantidade > stt[idp])
			{
				alert("Não temos quantidade suficiente desse produto, temos apenas " + stt[idp] + " unidade(s).");
			}
			else
			{
				stt[idp] -= quantidade;
				alert("Pedido atendido com sucesso. Obrigado e volte sempre.");
			}
		}
		else
		{
			alert("O código do seu produto é inexistente");
		}
	}	
}


for (i = 0; i < cp.length; i++)
{
	document.write(np[i] + " - " + " código: " + cp[i] + " quantidade: " + stt[i] + "<br>");
	qt += stt[i];

	if (stt[i+1] < me.qts)
	{
		me.nome = np[i+1];
		me.qts = stt[i+1];
	}

	if (stt[i+1] > ma.qts)
	{	ma.nome = np[i+1];
		ma.qts = stt[i+1];
	}
}

document.write("---------------------------------------" + "<br>");
document.write("O produto de menor quantidade é o (" + me.nome + "), com " + me.qts + " unidades." + "<br>");
document.write("O produto de maior quantidade é o (" + ma.nome + "), com " + ma.qts + " unidades." + "<br>");
document.write("A quantidade total de produtos no estoque é " + qt);
