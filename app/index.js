class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	sayHi(){
		return `Hello, my name is ${this.name}.`;
	}
}

class SuperPerson extends Person {
	constructor(name, age, phrase){
		super(name, age);
		this.phrase = phrase;
	}
	sayPhrase(){
		return this.phrase;
	}
	sayBye(){
		return `My name is ${this.name}, good day.`;
	}
	sayHello(){
		return super.sayHi() + 'I am a super person now';
	}
}

const bob = new SuperPerson('Bob', 99, 'Catch phrase');

console.log('Bob:', bob.sayHi());
console.log('Bob:', bob.sayBye());
console.log('Bob:', bob.sayHello());
console.log('Age:', bob.age);