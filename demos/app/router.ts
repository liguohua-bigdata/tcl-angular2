import {bind,Component,View,bootstrap} from "angular2/angular2";
import {
    ROUTER_DIRECTIVES, 
    routerBindings, 
    RouteConfig, 
    RouteParams,
    Location, 
    LocationStrategy, 
    HashLocationStrategy
} from "angular2/router";
    
// Video组件
@Component({ selector: "my-video" })
@View({
    template: `
            <h1>I LOVE THIS VIDEO!</h1>
        `
})
class Video { }
        
//Music 组件
@Component({ selector: "my-music" })
@View({
    template: `
            <h1>THAT'S FANTASTIC MUSIC!, RoutParams: {{id}}</h1>
        `
})
class Music {
    id: string;
    constructor(params:RouteParams){
        this.id = params.get('id');
    }
 }
    
//App组件
@Component({ selector: "my-app"})
@View({
    directives: [ROUTER_DIRECTIVES],
	template : `
    	<!--声明路由入口-->
    	<nav>
        	<b [router-link]="['/Video']">video</b> | 
        	<b [router-link]="['/Music', {id:'xx'}]">music</b>
        </nav>
        <main>
        	<!--声明路由出口-->
        	<router-outlet></router-outlet>
        </main>
    `
})
//路由配置注解
@RouteConfig([
    {path: "/video", component: Video, as: "Video" },
    {path:"/music/:id", component:Music, as:"Music"}
])
class App{ 
    constructor(location: Location) {
        location.go('/video');
    }     
}
    
         
bootstrap(App, [
    routerBindings(App),
    bind(LocationStrategy).toClass(HashLocationStrategy)
]);