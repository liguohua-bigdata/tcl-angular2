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
    var EzPromotion, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            EzPromotion = (function () {
                function EzPromotion() {
                }
                EzPromotion = __decorate([
                    angular2_1.Component({
                        selector: "ez-promotion",
                        properties: ["gender"]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.CORE_DIRECTIVES],
                        styles: ["\n           img{max-width:50%;}\n    "],
                        template: "\n        <div [ng-switch]=\"gender\">\n            <template ng-switch-when=\"Male\">\n                <img src=\"statics/images/male-ad.jpg\">\n            </template>\n            <template ng-switch-when=\"Female\">\n                <img src=\"statics/images/female-ad.jpg\">\n            </template>\n            <template ng-switch-default>\n                <h1>Learn Something, NOW!</h1>\n            </template>                    \n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzPromotion);
                return EzPromotion;
            }());
            App = (function () {
                function App() {
                    this.gender = "Female";
                }
                App.prototype.changeToMale = function () {
                    this.gender = "Male";
                };
                App.prototype.changeToFemale = function () {
                    this.gender = "Female";
                };
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        directives: [EzPromotion, angular2_1.CORE_DIRECTIVES],
                        template: "\n        <ez-promotion [gender]=\"gender\"></ez-promotion>\n        <button *ng-if=\"gender!='Male'\" (click)=\"changeToMale()\">Change to Male</button> <p>\n        <button *ng-if=\"gender!='Female'\" (click)=\"changeToFemale()\">Change to Female</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=ngswitch.js.map