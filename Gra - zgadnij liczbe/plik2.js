let input = document.getElementById("value");
let button = document.getElementById("send");
let answer = document.getElementById("opis");
let list = document.getElementById("list");
let i=1;

let los = Math.floor(Math.random()*15)+1;

//alert(los);


function funkcja()
{
	let value= Number(input.value);
	if (Number.isInteger(value) && value >=1 && value <= 15)
	{
		
		if (los>value)
		{
			answer.innerHTML="Wylosowana liczba jest większa niż podałeś";
		}
		else if (los==value)
		{
			answer.innerHTML="BRAWO, Zgadłeś za " + i + " razem!";
			answer.classList.add("good");
			button.innerHTML="Odśwież";
			button.removeEventListener("click",funkcja);
			button.addEventListener("click",odswiez);

		}
		else
		{
			answer.innerHTML="Wylosowana liczba jest mniejsza niż podałeś";
		}
		
		let li = document.createElement("li");
		list.appendChild(li);
		list.lastChild.innerHTML ="Podana wartość "+ i + ": " +value;

		i++;
	}
	else
	{
		alert("Błędna liczba kolego");
	}
}

button.addEventListener("click",funkcja);

function odswiez()
{
	location.reload();
}