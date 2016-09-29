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
    var EzStar, EzApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            EzStar = (function () {
                function EzStar() {
                    this.actor = "Jason Statham";
                    this.films = [
                        "Mechanic: Rescurrection / 2016",
                        "Spy / 2015",
                        "Furious 7 /2015",
                        "Wild Card / 2015",
                        "The Expendables / 2014",
                        "Home Front / 2013",
                        "Hummingbird / 2013",
                        "Fast & Furious 6 / 2013",
                        "Parker / 2013"
                    ];
                }
                EzStar = __decorate([
                    angular2_1.Component({
                        selector: "ez-star"
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgFor],
                        template: "\n        <div>\n            <h2>{{actor}} - Films</h2>\n            <ul>\n                <li *ng-for=\"#film of films;#i=index\">{{i}}.{{film}}</li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzStar);
                return EzStar;
            }());
            EzApp = (function () {
                function EzApp() {
                }
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        directives: [EzStar],
                        template: "\n    \t<ez-star></ez-star>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            }());
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=ngfor.js.map