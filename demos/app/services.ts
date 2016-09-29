import {Component, View, bootstrap, FORM_DIRECTIVES} from "angular2/angular2";
// 导入服务
import {CalService} from "./cal_services";


@Component({
    selector : "my-app",
    viewBindings: [CalService]
})
@View({
    directives: [FORM_DIRECTIVES],
    template : `
    		<form> 
            	<input type="text"  [(ng-model)]="a"> 
                +
                <input type="text"  [(ng-model)]="b"> 
                =
                {{ value }}
            </form>`,
     styles:[`
     	*{font-size:30px;font-weight:bold;}
        input{width:100px;}
     `]
})
class App{

    private a: number;
    private b: number;
    private cal: CalService;
	//注入参数声明
    constructor(cal:CalService){
    	this.a = 37;
        this.b = 128;
        this.cal = cal;
    }

    get value(){
    	var a = +this.a,
        	b = +this.b;
    	return this.cal.add(a,b);
    }
}

bootstrap(App);