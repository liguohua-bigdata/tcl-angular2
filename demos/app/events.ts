import {Component,View,bootstrap, Directive, EventEmitter} from "angular2/angular2";

@Directive({
	selector:"my-event",
    events:["change"]
})
class MyEvent{
    change: EventEmitter;
	constructor(){
        this.change = new EventEmitter();
        //模拟触发事件
        setTimeout(()=>this.change.next({
        	src:"custome event",
            desc:"模拟事件"
        }),1000);
    }
}


//根组件 - App
@Component({ selector: "my-app" })
@View({
    directives: [MyEvent],
    template: `
                <div class="app">
                    <h1>App</h1>
                    <my-event (change)="onChange($event)"></my-event>
                    <pre>{{evtStr}}</pre>
                </div>`
})
class App {
    evtStr: string;

    constructor() {
        this.evtStr = "";
    }
    onChange(evt: Object) {
        this.evtStr = JSON.stringify(evt, null, "\t");
    }
}     
bootstrap(App);