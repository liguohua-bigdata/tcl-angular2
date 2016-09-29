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
                ], IntervalDir.prototype, "everySecond");
                __decorate([
                    angular2_1.Output('everyFiveSeconds'), 
                    __metadata('design:type', Object)
                ], IntervalDir.prototype, "five5Secs");
                IntervalDir = __decorate([
                    angular2_1.Directive({
                        selector: "interval-dir"
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntervalDir);
                return IntervalDir;
            })();
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
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=ngif.js.map