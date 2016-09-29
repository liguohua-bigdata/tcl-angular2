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
    var IntervalDir, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            IntervalDir = (function () {
                function IntervalDir() {
                    var _this = this;
                    this.everySecond = new angular2_1.EventEmitter();
                    this.five5Secs = new angular2_1.EventEmitter();
                    setInterval(function () { return _this.everySecond.next("event"); }, 1000);
                    setInterval(function () { return _this.five5Secs.next("event"); }, 5000);
                }
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', Object)
                ], IntervalDir.prototype, "everySecond", void 0);
                __decorate([
                    angular2_1.Output('everyFiveSeconds'), 
                    __metadata('design:type', Object)
                ], IntervalDir.prototype, "five5Secs", void 0);
                IntervalDir = __decorate([
                    angular2_1.Directive({
                        selector: "interval-dir"
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntervalDir);
                return IntervalDir;
            }());
            App = (function () {
                function App() {
                    this.hidden = false;
                }
                App.prototype.everySecond = function () {
                    console.log("every second");
                };
                App.prototype.everyFiveSeconds = function () {
                    console.log("every five seconds");
                };
                App.prototype.toggle = function () {
                    this.hidden = !this.hidden;
                };
                App = __decorate([
                    angular2_1.Component({
                        selector: "my-app"
                    }),
                    angular2_1.View({
                        template: "\n\t\t<p *ng-if=\"hidden\"> I am hidden now</p>\n\t\t<p *ng-if=\"!hidden\"> I am visible now</p>\n\t\t<interval-dir (every-second)=\"everySecond()\" \n\t\t\t(every-five-seconds)=\"everyFiveSeconds()\"></interval-dir>\n\t\t<button (click)=\"toggle()\"> Toggle status</button>\n\t",
                        directives: [angular2_1.CORE_DIRECTIVES, IntervalDir]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=ngif.js.map