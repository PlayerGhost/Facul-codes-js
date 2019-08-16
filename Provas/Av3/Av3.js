function checkCode(cs, code)
{
	var v = code;
	var first = 0;
	var last = v.length - 1;
	var mid;
	var r;

	while (first <= last)
	{
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

	if (cs = v[mid])
	{
		r = true;
	}

	else
	{
		r = false
	}

	return r;
}

var cp = [100, 200, 300, 400, 500];
var np = ["a", "b", "c", "d", "e"];
var stt = [10, 20, 30, 40, 50];

var cpf; 
var cpb;
var quantidade;

while (cpf != 0)
{
	cpf = parseInt(prompt("Informe seu CPF."));

	if (cpf != 0)
	{
		
		cpb = parseInt(prompt("Informe o código do produto que voce deseja comprar."));
		checkCode(cpb, cp);

		if (checkCode)
		{		
			quantidade = parseInt(prompt("Informe a quantidade do produto que você deseja comprar."));
		}
		else
		{
			alert("O código do seu produto é inexistente");
		}
	}	
}


for (i = 0; i < cp.length; i++)
{
	document.write(np[i] + " - " + " código " + cp[i] + "quantidade: " + stt[i] + "<br>");
}

document.write("---------------------------------------");
document.write("A quantidade total de produtos no estoque é " + cp.length);
