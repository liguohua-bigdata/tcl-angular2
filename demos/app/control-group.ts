import {Component, View, bootstrap, FORM_DIRECTIVES} from "angular2/angular2";

@Component({selector:"my-app"})
@View({
    directives: [FORM_DIRECTIVES],
	template:`
    	<form #f="form">
        	<div>基本信息</div>
            <!--声明控件组-->
        	<ul ng-control-group="basic">
            	<li>姓名：<input type="text" ng-control="name"></li>
            	<li>地址：<input type="text" ng-control="address"></li>
            	<li>电话：<input type="text" ng-control="telephone"></li>
            </ul>
        	<div>专业技能</div>
            <!--声明控件组-->
            <ul ng-control-group="expertise">
            	<li>英语：<input type="checkbox" ng-control="english"></li>
            	<li>科技：<input type="checkbox" ng-control="tech"></li>
            	<li>运动：<input type="checkbox" ng-control="sport"></li>
            </ul>
            
            <div>兴趣爱好</div>
            
            <ul ng-control-group="interest">
            	<li>读书:<input type="checkbox" ng-control="reading" /></li>
                <li>写作:<input type="checkbox" ng-control="writing" /></li>
            </ul>
        </form>
        <!--调试：实时转储模型的值-->
        <pre>{{decode(f.value)}}</pre>
    `,
    styles:[`
    	div{padding:5px;background:#b3e5fc;color:red;}
    	form{background:#e1f5fe;}
    	ul{list-style:none;padding:5px;margin:0px;}
        li{line-height:30px;}
    `]
})
class App{
    decode(val:Object){
    	return JSON.stringify(val,null,"\t");
    }
}

bootstrap(App);