System.register(["angular2/angular2", "./cal_services"], function(exports_1) {
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
    var angular2_1, cal_services_1;
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (cal_services_1_1) {
                cal_services_1 = cal_services_1_1;
            }],
        execute: function() {
            App = (function () {
                //注入参数声明
                function App(cal) {
                    this.a = 37;
                    this.b = 128;
                    this.cal = cal;
                }
                Object.defineProperty(App.prototype, "value", {
                    get: function () {
                        var a = +this.a, b = +this.b;
                        return this.cal.add(a, b);
                    },
                    enumerable: true,
                    configurable: true
                });
                App = __decorate([
                    angular2_1.Component({
                        selector: "my-app",
                        viewBindings: [cal_services_1.CalService]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES],
                        template: "\n    \t\t<form> \n            \t<input type=\"text\"  [(ng-model)]=\"a\"> \n                +\n                <input type=\"text\"  [(ng-model)]=\"b\"> \n                =\n                {{ value }}\n            </form>",
                        styles: ["\n     \t*{font-size:30px;font-weight:bold;}\n        input{width:100px;}\n     "]
                    }), 
                    __metadata('design:paramtypes', [cal_services_1.CalService])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=services.js.map