export function add(x,y){
	return x + y;
}

export function minus(x, y) {
	return x-y;
}

export function multiply(x, y) {
	return x * y;
}

export function divide(x, y) {
	if (y !== 0) {
		return x / y;
	} else {
		return 'Cannot divide by zero';
	}
}

export const divide2 = (x,y) => y ? x / y : 'Cannot divde by zero';

export default () => {
	console.log('This is the default export from math.js');
}