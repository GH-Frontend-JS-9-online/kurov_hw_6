console.log("Hi! It`s my array:")

let array_size = 10;
let array = [];

function	array_fill(){
	for (let i = 0; i < array_size; i++) {
		array[i] = Math.floor(Math.random() * Math.floor(100));
	}
	return array;
}

array = array_fill();

console.log(array);

function array_max(arr){
	return Math.max.apply(null, arr);
}

console.log("Max element", array_max(array));

function array_min(arr){
	return Math.min.apply(null, arr);
}

console.log("Min element", array_min(array));

function replace_el(arr){
	let index_max = arr.indexOf(array_max(arr));
	let index_min = arr.indexOf(array_min(arr));
	let change_max = array_max(arr);
	arr[index_max] = array_min(arr);
	arr[index_min] = change_max;
	return arr;
}

console.log("Replaced elements ", replace_el(array));

function divide(arr, divide_1, divide_2) {
		let foobar = [];
		foobar = arr.map(function(num){
			if ((num % divide_1) == 0 && (num % divide_2) == 0) {
				return num = 'foobar';
			} else if ((num % divide_1) == 0){
				return num = 'foo';
			} else if ((num % divide_2) == 0){
				return num = 'bar';
			} else {
				return num;
			}
		});
		return foobar;
	}

console.log("Foo bar array ", divide(array, 3, 7));

function letter(first, second){
	let result = 0;
	for(let i = 0; i<=first.length; i++){

		for(let j = 0; j<=second.length; j++){

			if (first.charAt(i) == second.charAt(j)){
			result = result + 1;
			}
		}
	}
	return (result/(first.length + second.length))*100;
}

console.log("String percent match:", letter('firstbookstook', 'second_book'));

