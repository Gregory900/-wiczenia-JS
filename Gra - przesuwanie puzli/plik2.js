const gamePuzzles=document.querySelectorAll(".puzzel");
const gameBoard=document.querySelector("#container");
const picture1=document.querySelector("#picture1");
const picture2=document.querySelector("#picture2");

picture1.addEventListener("click", ()=>{
	gamePuzzles[0].classList.remove("aa");
	gamePuzzles[1].classList.remove("bb");
	gamePuzzles[2].classList.remove("cc");
	gamePuzzles[3].classList.remove("dd");
	gamePuzzles[4].classList.remove("ee");
	gamePuzzles[5].classList.remove("ff");
	gamePuzzles[6].classList.remove("gg");
	gamePuzzles[7].classList.remove("hh");
})

picture2.addEventListener("click", ()=>{
	gamePuzzles[0].classList.add("aa");
	gamePuzzles[1].classList.add("bb");
	gamePuzzles[2].classList.add("cc");
	gamePuzzles[3].classList.add("dd");
	gamePuzzles[4].classList.add("ee");
	gamePuzzles[5].classList.add("ff");
	gamePuzzles[6].classList.add("gg");
	gamePuzzles[7].classList.add("hh");
})

var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 8);
    if(arr.indexOf(r) === -1) arr.push(r);
};

const gameArray=[
[gamePuzzles[arr[0]],gamePuzzles[arr[1]],gamePuzzles[arr[2]]],
[gamePuzzles[arr[3]],gamePuzzles[arr[4]],gamePuzzles[arr[5]]],
[gamePuzzles[arr[6]],gamePuzzles[arr[7]],gamePuzzles[8]],
];

function refresh(gameBoard,gameArray){
	gameArray.forEach((row,rowIndex)=>{
		row.forEach((column,columnIndex)=>{
			column.style.top=(rowIndex*152)+"px";
			column.style.left=(columnIndex*152)+"px";
			gameBoard.appendChild(column);
		})
	})
}

function moveElement (element1, element2){
	const tempTop=element1.style.top;
	const TempLeft=element1.style.left;

	element1.style.top=element2.style.top;
	element1.style.left=element2.style.left;

	element2.style.top=tempTop;
	element2.style.left=TempLeft;
}

refresh(gameBoard,gameArray);

gameBoard.addEventListener(("click"), (e)=>{
	const target=e.target;
	let x,y;

	gameArray.forEach((row,rowIndex)=>{
		row.forEach((column, columnIndex) =>{
			if (column === target) {
			x=rowIndex;
			y=columnIndex;
			console.log(e.target.innerText)	
			}
		});
	});

	let emptyX, emptyY;

	gameArray.forEach((row,rowIndex)=>{
		row.forEach((column, columnIndex) =>{
			if (column.innerText === "") {
			emptyX=rowIndex;
			emptyY=columnIndex;
		}
		});
	});

	if((y===emptyY && (x+1===emptyX || x-1===emptyX)) || 
	(x===emptyX && (y+1===emptyY || y-1===emptyY))){
			moveElement(gameArray[x][y], gameArray[emptyX][emptyY])
			const temp=gameArray[x][y];
			gameArray[x][y]=gameArray[emptyX][emptyY];
			gameArray[emptyX][emptyY]=temp;
			}
});
