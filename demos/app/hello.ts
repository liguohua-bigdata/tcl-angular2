//从模块库引入三个类型定义
import {Component, View, bootstrap } from "angular2/angular2";

import {Pipe, ElementRef, ViewEncapsulation } from "angular2/angular2"

//angualr2 pipes see https://github.com/auth0/angular2-pipes

@Pipe({name:"upper"})
class Upper {
	transform(value: string, args?: any[]): string {
		return value ? value.toUpperCase() : value
	}
}
        
//组件定义
@Component({ selector: "my-app"})
@View({
	template: `
	<img [src]='image' /><h1>哎呦，不错，Angular2</h1>
	{{x | upper}}`,
	pipes: [Upper],
	// encapsulation: ViewEncapsulation.Native
})
class App { 
	image: string;
	x: string;
	constructor(ref: ElementRef) {
		console.log(ref.nativeElement.outerHTML)
		this.image = "./statics/images/jay.gif";
		this.x = 'hello';
		setTimeout(()=> this.x='a',2000)
	}
}

   
        
//渲染组件
bootstrap(App);