System.register(["angular2/angular2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, angular2_2;
    var Upper, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
                angular2_2 = angular2_1_1;
            }],
        execute: function() {
            //angualr2 pipes see https://github.com/auth0/angular2-pipes
            Upper = (function () {
                function Upper() {
                }
                Upper.prototype.transform = function (value, args) {
                    return value ? value.toUpperCase() : value;
                };
                Upper = __decorate([
                    angular2_2.Pipe({ name: "upper" }), 
                    __metadata('design:paramtypes', [])
                ], Upper);
                return Upper;
            }());
            //组件定义
            App = (function () {
                function App(ref) {
                    var _this = this;
                    console.log(ref.nativeElement.outerHTML);
                    this.image = "./statics/images/jay.gif";
                    this.x = 'hello';
                    setTimeout(function () { return _this.x = 'a'; }, 2000);
                }
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        template: "\n\t<img [src]='image' /><h1>\u54CE\u5466\uFF0C\u4E0D\u9519\uFF0CAngular2</h1>\n\t{{x | upper}}",
                        pipes: [Upper],
                    }), 
                    __metadata('design:paramtypes', [angular2_2.ElementRef])
                ], App);
                return App;
            }());
            //渲染组件
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=hello.js.map