import {Component, View, bootstrap, NgIf, FORM_DIRECTIVES} from "angular2/angular2";

@Component({ selector: "ez-app" })
@View({
    directives: [NgIf, FORM_DIRECTIVES],
    template: `
            	<form>
                	<ul>
                    	<li>姓名：<input type="text"  [(ng-model)]="data.name"></li>
                        <li>姓别：
                        	<select  [(ng-model)]="data.gender">
                            	<option value="Male">男</optoin>
                            	<option value="Female">女</optoin>
                            </select>
                        </li>
                    	<li>地址：<input type="text"  [(ng-model)]="data.address"></li>
                    	<li>电话：<input type="text"  [(ng-model)]="data.telephone"></li>
                    	<li>已婚：<input type="checkbox" [(ng-model)]="data.marriage"></li>
                    </ul>
                </form>
                <pre>{{decode(data)}}</pre>
            `,
    styles: [`
            	form{background:#e1f5fe;}
            	ul{list-style:none;padding:10px;margin:0px;}
                li{line-height:30px;}
            `]
})
class EzApp {
    data:Object
    constructor() {
        this.data = {
            name: "whoami"
        };
    }
    decode(val:Object) {
        return JSON.stringify(val, null, "\t");
    }
}



bootstrap(EzApp);