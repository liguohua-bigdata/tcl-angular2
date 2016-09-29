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
                    //创建控件对象
                    this.name = new angular2_1.Control("Jason");
                    this.address = new angular2_1.Control("London U.K.");
                    this.telephone = new angular2_1.Control("114");
                    this.company = new angular2_1.Control("TCL");
                }
                EzApp.prototype.dump = function () {
                    //读取控件对象的值
                    var val = {
                        name: this.name.value,
                        address: this.address.value,
                        telephone: this.telephone.value,
                        company: this.company.value
                    };
                    return JSON.stringify(val, null, "\t");
                };
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES],
                        template: "\n            \t<div>\n                \t<ul>\n                    \t<!--\u5C06\u8F93\u5165\u5143\u7D20\u7ED1\u5B9A\u5230\u5DF2\u7ECF\u521B\u5EFA\u7684\u63A7\u4EF6\u5BF9\u8C61-->\n                    \t<li>\u59D3\u540D\uFF1A<input type=\"text\" [ng-form-control]=\"name\"></li>\n                    \t<li>\u5730\u5740\uFF1A<input type=\"text\" [ng-form-control]=\"address\"></li>\n                    \t<li>\u7535\u8BDD\uFF1A<input type=\"text\" [ng-form-control]=\"telephone\"></li>                    <li>\u5355\u4F4D\uFF1A<input type=\"text\" [ng-form-control]=\"company\"></li>\n\n                    </ul>\n                </div>\n                <!--\u8C03\u8BD5\uFF1A\u8F6C\u50A8\u6A21\u578B\u4FE1\u606F-->\n                <pre>{{dump()}}</pre>\n            ",
                        styles: ["\n            \tform{background:#e1f5fe;}\n            \tul{list-style:none;padding:10px;margin:0px;}\n                li{line-height:30px;}\n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            })();
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=form_control.js.map