import {Component,View,bootstrap,  Query, QueryList, ElementRef} from "angular2/angular2";

@Component({selector:"ez-app"})
@View({
	template:`	
        <p>Vars</p>
    	<h1 #v_root>
        	<button (click)="changeColor(v_root)">变色</button>
        	I choose 
            <b #v_who>WHO?</b>
        </h1>
    	<button (click)="v_who.textContent = 'Jason'">Jason</button>
    	<button (click)="v_who.textContent = 'Mary'">Mary</button>
    	<button (click)="v_who.textContent = 'Linda'">Linda</button>
    	<button (click)="v_who.textContent = 'Lincoln'">Lincoln</button>
    	<button (click)="v_who.textContent = 'Jimmy'">Jimmy</button>
    	<button (click)="v_who.textContent = 'Albert'">Albert</button>
   	`
})
class EzApp{
    els: QueryList<ElementRef>;
    constructor( @Query('v_root') els: QueryList<ElementRef>){
        this.els = els;
    }
    changeColor(x:any){
        x.style.backgroundColor = "pink";
        //alert(this.els.length)
    }

}

window.onload = function(){
  bootstrap(EzApp);  
}     
