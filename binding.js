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
    var EzApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            EzApp = (function () {
                function EzApp() {
                    this.data = {
                        name: "whoami"
                    };
                }
                EzApp.prototype.decode = function (val) {
                    return JSON.stringify(val, null, "\t");
                };
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, angular2_1.FORM_DIRECTIVES],
                        template: "\n            \t<form>\n                \t<ul>\n                    \t<li>\u59D3\u540D\uFF1A<input type=\"text\"  [(ng-model)]=\"data.name\"></li>\n                        <li>\u59D3\u522B\uFF1A\n                        \t<select  [(ng-model)]=\"data.gender\">\n                            \t<option value=\"Male\">\u7537</optoin>\n                            \t<option value=\"Female\">\u5973</optoin>\n                            </select>\n                        </li>\n                    \t<li>\u5730\u5740\uFF1A<input type=\"text\"  [(ng-model)]=\"data.address\"></li>\n                    \t<li>\u7535\u8BDD\uFF1A<input type=\"text\"  [(ng-model)]=\"data.telephone\"></li>\n                    \t<li>\u5DF2\u5A5A\uFF1A<input type=\"checkbox\" [(ng-model)]=\"data.marriage\"></li>\n                    </ul>\n                </form>\n                <pre>{{decode(data)}}</pre>\n            ",
                        styles: ["\n            \tform{background:#e1f5fe;}\n            \tul{list-style:none;padding:10px;margin:0px;}\n                li{line-height:30px;}\n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            }());
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=binding.js.map