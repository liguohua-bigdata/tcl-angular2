System.register(['angular2/angular2'], function(exports_1, context_1) {
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
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.ctrlFirst = new angular2_1.Control('larry', angular2_1.Validators.required);
                    this.ctrlMiddle = new angular2_1.Control('');
                    this.ctrlLast = new angular2_1.Control('', angular2_1.Validators.required);
                    this.ctrlFood = new angular2_1.Control('pizza', angular2_1.Validators.required);
                    this.ctrlCities = [
                        new angular2_1.Control('1'),
                        new angular2_1.Control('2'),
                        new angular2_1.Control('3')
                    ];
                    this.citiesArray = new angular2_1.ControlArray(this.ctrlCities);
                    this.formGroup = new angular2_1.ControlGroup({
                        name: new angular2_1.ControlGroup({
                            first: this.ctrlFirst,
                            middle: this.ctrlMiddle,
                            last: this.ctrlLast
                        }),
                        food: this.ctrlFood,
                        cities: this.citiesArray
                    });
                }
                Object.defineProperty(App.prototype, "cgValue", {
                    get: function () {
                        return JSON.stringify(this.formGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                App.prototype.addCity = function () {
                    this.citiesArray.push(new angular2_1.Control('4'));
                };
                App = __decorate([
                    angular2_1.Component({
                        selector: 'my-app',
                    }),
                    angular2_1.View({
                        template: "\n    <div>\n      <h2>Angular2 Control &amp; ControlGroup Example</h2>\n      <form [ng-form-model]=\"formGroup\">\n        <div ng-control-group=\"name\">\n          <h3>Enter your name:</h3>\n          <p>First: <input ng-control=\"first\"><span *ng-if=\"!ctrlFirst.valid\"> [required]</span></p>\n          <p>Middle: <input ng-control=\"middle\"></p>\n          <p>Last: <input ng-control=\"last\"><span *ng-if=\"!ctrlLast.valid\"> [required]</p>\n        </div>\n        <h3>What's your favorite food?</h3>\n        <p><input ng-control=\"food\"><span *ng-if=\"!ctrlFood.valid\"> [required]</span></p>\n        <h3>Name a few cities:</h3>\n        <ul ng-control-group=\"cities\">\n          <li *ng-for=\"#ctrl of ctrlCities; #i = index\"><input ng-control=\"{{i}}\"></li>\n        </ul>\n        <button type=\"button\" (click)=\"addCity()\">Add a city</button>\n      </form>\n      <h3>Value:</h3>\n      <pre>{{cgValue}}</pre>\n      <h3>Validity:</h3>\n      <pre>{{formGroup.valid}}</pre>\n    </div>\n  ",
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=form_model.js.map