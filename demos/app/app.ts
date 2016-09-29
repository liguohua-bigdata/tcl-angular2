import {Component, View, bootstrap } from "angular2/angular2";

@Component({ selector: "some-app"})
@View({
	template: `
		<div (click)="changeName()">{{name}}</div>
	`
})
class SomeApp { 
	name: string;
	constructor() {
		this.name = "hello, angular2";
	}
	changeName(){
		this.name = "you have cliked me"
	}
}
bootstrap(SomeApp);