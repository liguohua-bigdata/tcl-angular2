import {Component,View,bootstrap} from "angular2/angular2";


//具有属性接口的组件 - EzCard
@Component({
    selector: "ez-card",
    properties: ["name", "country"]
})
@View({
    template: `<div class='ez-card'>
            My name is <b>{{name}}</b>,
            I am from <b>{{country}}</b>.</div>`
})
class EzCard {
    constructor() {
        //this.name = "Mike";
        //this.country = "Sweden";
    }
}


//根组件 - EzApp
@Component({selector:"ez-app"})
@View({
	directives:[EzCard],
	template:`
    	<div class="ez-app">
    		<h1>App</h1>
            <ez-card [name]="name" [country]="country"></ez-card>
        </div>`
})
class EzApp{

    name: string;
    country: string;

   constructor(){    

		this.name="Larry";
        this.country="china";
     }
}       

   
//渲染组件
bootstrap(EzApp);