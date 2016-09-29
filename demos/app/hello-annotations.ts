//从模块库引入三个类型定义
import {Component, View, bootstrap} from "angular2/angular2";
        
//组件定义
@Component({ selector: "my-app" })
@View({ template: "<h1>Hello,Angular2</h1>" })
class EzApp { }       
        
//渲染组件
bootstrap(EzApp);