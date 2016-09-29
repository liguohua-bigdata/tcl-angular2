import { Component,View,bootstrap} from "angular2/angular2";

@Component({selector:"ez-app"})
@View({
	template:`<h1 [style.color]="color">Hello,Angular2</h1>`
})
class EzApp{
	color: string;
	constructor(){
    	this.color = "red";
        setInterval(()=> this.color = this.getRandomColor() , 1000);
    }
    
    getRandomColor(){
      var colors =[ "red", "green", "blue", "pink", "yellow"],
      	  index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }
}
        
bootstrap(EzApp);