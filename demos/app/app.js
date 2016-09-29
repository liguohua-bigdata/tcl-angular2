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
    var SomeApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            SomeApp = (function () {
                function SomeApp() {
                    this.name = "hello, angular2";
                }
                SomeApp.prototype.changeName = function () {
                    this.name = "you have cliked me";
                };
                SomeApp = __decorate([
                    angular2_1.Component({ selector: "some-app" }),
                    angular2_1.View({
                        template: "\n\t\t<div (click)=\"changeName()\">{{name}}</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SomeApp);
                return SomeApp;
            })();
            angular2_1.bootstrap(SomeApp);
        }
    }
});
//# sourceMappingURL=app.js.map