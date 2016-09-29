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
            })();
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
            })();
            //渲染组件
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=properties.js.map