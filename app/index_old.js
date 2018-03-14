// console.log('App working: open app/index.js to start exploring ES6');

// const newEle = document.createElement('h1');
// newEle.innerText = 'This is core JS';

// document.getElementById('root').appendChild(newEle);

import addHeaderToDom from './helpers';
// addHeaderToDom('This is a new header');
// addHeaderToDom('This is a second header');
// import { add } from './math';
// import { minus } from './math';
// import { multiply } from './math';
// import { divide } from './math';
// import { divide2 } from './math';
import logFn, {add, minus, multiply, divide, divide2} from './math';
// import * as mathStuff from './math';
// console.log('mathStuff:', mathStuff);

addHeaderToDom('3 + 7 = ' + add(3, 7));
addHeaderToDom('3 - 7 = ' + minus(3, 7));
addHeaderToDom('3 * 7 = ' + multiply(3, 7));
addHeaderToDom('3 / 7 = ' + divide(3, 7).toFixed(3));
addHeaderToDom('3 / 7 = ' + divide2(3, 0));
logFn(); //equals to the default function;

