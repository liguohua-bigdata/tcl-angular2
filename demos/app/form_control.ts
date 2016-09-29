import {Component, View, bootstrap, FORM_DIRECTIVES, Control} from "angular2/angular2";

@Component({ selector: "ez-app" })
@View({
    directives: [FORM_DIRECTIVES],
    template: `
            	<div>
                	<ul>
                    	<!--将输入元素绑定到已经创建的控件对象-->
                    	<li>姓名：<input type="text" [ng-form-control]="name"></li>
                    	<li>地址：<input type="text" [ng-form-control]="address"></li>
                    	<li>电话：<input type="text" [ng-form-control]="telephone"></li>                    <li>单位：<input type="text" [ng-form-control]="company"></li>

                    </ul>
                </div>
                <!--调试：转储模型信息-->
                <pre>{{dump()}}</pre>
            `,
    styles: [`
            	form{background:#e1f5fe;}
            	ul{list-style:none;padding:10px;margin:0px;}
                li{line-height:30px;}
            `]
})
class EzApp {
    name: Control
    address: Control
    telephone: Control
    company: Control
    constructor() {
        //创建控件对象
        this.name = new Control("Jason");
        this.address = new Control("London U.K.");
        this.telephone = new Control("114");
        this.company = new Control("TCL");
    }
    dump() {
        //读取控件对象的值
        var val = {
            name: this.name.value,
            address: this.address.value,
            telephone: this.telephone.value,
            company: this.company.value
        }
        return JSON.stringify(val, null, "\t");
    }
}



bootstrap(EzApp);