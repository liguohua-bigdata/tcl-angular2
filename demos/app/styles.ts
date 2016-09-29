import {Component,View,bootstrap} from "angular2/angular2";

@Component({selector : "ez-app"})
@View({
	styles:[`
    	div.ez-greeting{font-family:Courier;background:#ede7f6;box-shadow:0 2px 5px 0;}
    	h1{background:#4dba6c;color:#fff;text-align:center;}     
        div.content{padding:10px;}
    `],

    // styleUrls: ["statics/styles/styles.css"],
	template : `
    	<div class="ez-greeting">
            <h1>Hello,Angular2</h1>
            <div class="content">
                <p>
                    使用ES6开发Angular2应用的一个好处就是，可以不用拼接样式字符串了。
                </p>
                <ul>
                    <li>在样式中可以使用任何标准的CSS语法</li>
                    <li>如果样式定义在单独的文件里，可以使用styleUrls引入</li>
                </ul>
            </div>
        </div>
    `
})
class EzApp{}

bootstrap(EzApp);   