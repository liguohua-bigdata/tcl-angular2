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
    var angular2_1;
    var EzCard, EzApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            //具有属性接口的组件 - EzCard
            EzCard = (function () {
                function EzCard() {
                    //this.name = "Mike";
                    //this.country = "Sweden";
                }
                EzCard = __decorate([
                    angular2_1.Component({
                        selector: "ez-card",
                        properties: ["name", "country"]
                    }),
                    angular2_1.View({
                        template: "<div class='ez-card'>\n            My name is <b>{{name}}</b>,\n            I am from <b>{{country}}</b>.</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzCard);
                return EzCard;
            }());
            //根组件 - EzApp
            EzApp = (function () {
                function EzApp() {
                    this.name = "Larry";
                    this.country = "china";
                }
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        directives: [EzCard],
                        template: "\n    \t<div class=\"ez-app\">\n    \t\t<h1>App</h1>\n            <ez-card [name]=\"name\" [country]=\"country\"></ez-card>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            }());
            //渲染组件
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=properties.js.map