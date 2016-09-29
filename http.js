System.register(["angular2/angular2", "angular2/http"], function(exports_1, context_1) {
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
    var angular2_1, http_1;
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //EzApp组件
            App = (function () {
                function App(http) {
                    var _this = this;
                    this.band = {};
                    http.get("statics/api/music.json")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.band = res[0]; });
                }
                App = __decorate([
                    angular2_1.Component({
                        selector: "my-app",
                        //注入Http依赖项集合
                        viewBindings: [http_1.HTTP_BINDINGS]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgFor],
                        template: "\n    \t<div *ng-for=\"#album of band.albums\"><img [src]=\"album.cover\"></div>\n    ",
                        styles: ["\n    \timg{height:200px;width:200px;}\n        div{float:left;margin:10px;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], App);
                return App;
            }());
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=http.js.map