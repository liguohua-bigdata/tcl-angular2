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
            })();
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
            })();
            //渲染组件
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=pipe.js.map