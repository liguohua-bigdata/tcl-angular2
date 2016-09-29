System.register(["angular2/angular2", "angular2/http"], function(exports_1) {
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
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=http.js.map