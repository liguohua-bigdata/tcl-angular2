import {Inject,Component,View,bootstrap,NgFor} from "angular2/angular2";
//引入Http相关预定义类型
import {Http, HTTP_BINDINGS} from "angular2/http";
//EzApp组件
@Component({
	selector:"my-app",
    //注入Http依赖项集合
    viewBindings: [HTTP_BINDINGS]
})
@View({
	directives:[NgFor],
	template:`
    	<div *ng-for="#album of band.albums"><img [src]="album.cover"></div>
    `,
    styles:[`
    	img{height:200px;width:200px;}
        div{float:left;margin:10px;}
    `]
})
class App{
	//注入Http实例对象
    private band: Object
	constructor(http:Http){
        this.band = {};
    	http.get("statics/api/music.json")
        .map( (res:any):Object => res.json() )
        .subscribe( (res: any): Object  => this.band = res[0]);
    }
}


bootstrap(App);