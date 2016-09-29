import {Component, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

@Component({selector:"my-app"})
@View({
	directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
	template:`
    	<form #f="form" (submit)="search(f.value)">
        	<select ng-control="type" [ng-model]="type">
            	<option value="web">网页</option>
            	<option value="news">新闻</option>
            	<option value="image">图片</option>
            </select>
        	<input type="text" ng-control="kw">
            <button type="submit">搜索</button>
        </form>
        <!--给个简单的反馈-->
        <h1 *ng-if="kw!=''">正在搜索 {{kw}} ...</h1>
    `,
    styles:[`form{background:#90a4ae;padding:5px;}`]            
})


class App{
    kw: string;
    type: string;
	constructor(){
    	this.kw = "";
        this.type = "image";
    }
	search(val:any){
        console.log(val);
    	this.kw = val.kw;
        //假装在搜索，2秒钟返回
        setTimeout(()=>this.kw="",2000);
    }
}
    
bootstrap(App);    