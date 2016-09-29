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
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.decode = function (val) {
                    return JSON.stringify(val, null, "\t");
                };
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES],
                        template: "\n    \t<form #f=\"form\">\n        \t<div>\u57FA\u672C\u4FE1\u606F</div>\n            <!--\u58F0\u660E\u63A7\u4EF6\u7EC4-->\n        \t<ul ng-control-group=\"basic\">\n            \t<li>\u59D3\u540D\uFF1A<input type=\"text\" ng-control=\"name\"></li>\n            \t<li>\u5730\u5740\uFF1A<input type=\"text\" ng-control=\"address\"></li>\n            \t<li>\u7535\u8BDD\uFF1A<input type=\"text\" ng-control=\"telephone\"></li>\n            </ul>\n        \t<div>\u4E13\u4E1A\u6280\u80FD</div>\n            <!--\u58F0\u660E\u63A7\u4EF6\u7EC4-->\n            <ul ng-control-group=\"expertise\">\n            \t<li>\u82F1\u8BED\uFF1A<input type=\"checkbox\" ng-control=\"english\"></li>\n            \t<li>\u79D1\u6280\uFF1A<input type=\"checkbox\" ng-control=\"tech\"></li>\n            \t<li>\u8FD0\u52A8\uFF1A<input type=\"checkbox\" ng-control=\"sport\"></li>\n            </ul>\n            \n            <div>\u5174\u8DA3\u7231\u597D</div>\n            \n            <ul ng-control-group=\"interest\">\n            \t<li>\u8BFB\u4E66:<input type=\"checkbox\" ng-control=\"reading\" /></li>\n                <li>\u5199\u4F5C:<input type=\"checkbox\" ng-control=\"writing\" /></li>\n            </ul>\n        </form>\n        <!--\u8C03\u8BD5\uFF1A\u5B9E\u65F6\u8F6C\u50A8\u6A21\u578B\u7684\u503C-->\n        <pre>{{decode(f.value)}}</pre>\n    ",
                        styles: ["\n    \tdiv{padding:5px;background:#b3e5fc;color:red;}\n    \tform{background:#e1f5fe;}\n    \tul{list-style:none;padding:5px;margin:0px;}\n        li{line-height:30px;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=control-group.js.map