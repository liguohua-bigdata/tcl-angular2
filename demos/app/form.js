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
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.kw = "";
                    this.type = "image";
                }
                App.prototype.search = function (val) {
                    var _this = this;
                    console.log(val);
                    this.kw = val.kw;
                    //假装在搜索，2秒钟返回
                    setTimeout(function () { return _this.kw = ""; }, 2000);
                };
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
                        template: "\n    \t<form #f=\"form\" (submit)=\"search(f.value)\">\n        \t<select ng-control=\"type\" [ng-model]=\"type\">\n            \t<option value=\"web\">\u7F51\u9875</option>\n            \t<option value=\"news\">\u65B0\u95FB</option>\n            \t<option value=\"image\">\u56FE\u7247</option>\n            </select>\n        \t<input type=\"text\" ng-control=\"kw\">\n            <button type=\"submit\">\u641C\u7D22</button>\n        </form>\n        <!--\u7ED9\u4E2A\u7B80\u5355\u7684\u53CD\u9988-->\n        <h1 *ng-if=\"kw!=''\">\u6B63\u5728\u641C\u7D22 {{kw}} ...</h1>\n    ",
                        styles: ["form{background:#90a4ae;padding:5px;}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=form.js.map