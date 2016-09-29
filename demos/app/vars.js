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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
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
                function EzApp(els) {
                    this.els = els;
                }
                EzApp.prototype.changeColor = function (x) {
                    x.style.backgroundColor = "pink";
                    //alert(this.els.length)
                };
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        template: "\t\n        <p>Vars</p>\n    \t<h1 #v_root>\n        \t<button (click)=\"changeColor(v_root)\">\u53D8\u8272</button>\n        \tI choose \n            <b #v_who>WHO?</b>\n        </h1>\n    \t<button (click)=\"v_who.textContent = 'Jason'\">Jason</button>\n    \t<button (click)=\"v_who.textContent = 'Mary'\">Mary</button>\n    \t<button (click)=\"v_who.textContent = 'Linda'\">Linda</button>\n    \t<button (click)=\"v_who.textContent = 'Lincoln'\">Lincoln</button>\n    \t<button (click)=\"v_who.textContent = 'Jimmy'\">Jimmy</button>\n    \t<button (click)=\"v_who.textContent = 'Albert'\">Albert</button>\n   \t"
                    }),
                    __param(0, angular2_1.Query('v_root')), 
                    __metadata('design:paramtypes', [angular2_1.QueryList])
                ], EzApp);
                return EzApp;
            })();
            window.onload = function () {
                angular2_1.bootstrap(EzApp);
            };
        }
    }
});
//# sourceMappingURL=vars.js.map