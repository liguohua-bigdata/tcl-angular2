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
    var EzApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            EzApp = (function () {
                function EzApp() {
                    var _this = this;
                    this.color = "red";
                    setInterval(function () { return _this.color = _this.getRandomColor(); }, 1000);
                }
                EzApp.prototype.getRandomColor = function () {
                    var colors = ["red", "green", "blue", "pink", "yellow"], index = Math.floor(Math.random() * colors.length);
                    return colors[index];
                };
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        template: "<h1 [style.color]=\"color\">Hello,Angular2</h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            })();
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=random_colors.js.map