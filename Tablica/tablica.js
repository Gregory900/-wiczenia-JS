const arr=[[3,21,37],[44,66,77],[88,99,120,222]];


const isNumberInArrayOfArray=(array,number)=>{
	let found=false;
	array.forEach(InnerArray=>{
		if (InnerArray.indexOf(number) !== -1){
		return found=true;
	}
	});
	return found;
};


console.log(isNumberInArrayOfArray(arr,3)); //true
console.log(isNumberInArrayOfArray(arr,40)); //false
console.log(isNumberInArrayOfArray(arr,77)); //true
console.log(isNumberInArrayOfArray(arr,121)); //false

