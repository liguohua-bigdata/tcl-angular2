System.register(["angular2/angular2"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var MyEvent, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            MyEvent = (function () {
                function MyEvent() {
                    var _this = this;
                    this.change = new angular2_1.EventEmitter();
                    //模拟触发事件
                    setTimeout(function () { return _this.change.next({
                        src: "custome event",
                        desc: "模拟事件"
                    }); }, 1000);
                }
                MyEvent = __decorate([
                    angular2_1.Directive({
                        selector: "my-event",
                        events: ["change"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyEvent);
                return MyEvent;
            })();
            //根组件 - App
            App = (function () {
                function App() {
                    this.evtStr = "";
                }
                App.prototype.onChange = function (evt) {
                    this.evtStr = JSON.stringify(evt, null, "\t");
                };
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        directives: [MyEvent],
                        template: "\n                <div class=\"app\">\n                    <h1>App</h1>\n                    <my-event (change)=\"onChange($event)\"></my-event>\n                    <pre>{{evtStr}}</pre>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=events.js.map