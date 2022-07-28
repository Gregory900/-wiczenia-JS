let range = document.getElementById("range");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let input = document.getElementById("value");
let button = document.getElementById("send");
let answer = document.getElementById("opis");
let list = document.getElementById("list");

let los1 = Math.floor(Math.random()*10)+1;
let los2 = Math.floor(Math.random()*15)+1;
let los3 = Math.floor(Math.random()*20)+1;

let i=1;
let j=0;
let los;

range1.addEventListener("click",()=>{
	range.innerHTML="od 1 do 10";
	range.classList.add("good");
	los=los1;
	j=10;
});
	
range2.addEventListener("click",()=>{
	range.innerHTML="od 1 do 15";
	range.classList.add("good");
	los=los2;
	j=15;
});
	
range3.addEventListener("click",()=>{
	range.innerHTML="od 1 do 20";
	range.classList.add("good");
	los=los3;
	j=20;
});

button.addEventListener("click",funkcja);

function funkcja()
{
	if (j===0) alert("wybierz zakres");
	else
	{
		range1.disabled=true;
		range2.disabled=true;
		range3.disabled=true;
		let value= Number(input.value);
		if (Number.isInteger(value) && value >=1 && value <= j)
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
}

function odswiez()
{
	location.reload();
}