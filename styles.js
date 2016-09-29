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
                }
                EzApp = __decorate([
                    angular2_1.Component({ selector: "ez-app" }),
                    angular2_1.View({
                        styles: ["\n    \tdiv.ez-greeting{font-family:Courier;background:#ede7f6;box-shadow:0 2px 5px 0;}\n    \th1{background:#4dba6c;color:#fff;text-align:center;}     \n        div.content{padding:10px;}\n    "],
                        // styleUrls: ["statics/styles/styles.css"],
                        template: "\n    \t<div class=\"ez-greeting\">\n            <h1>Hello,Angular2</h1>\n            <div class=\"content\">\n                <p>\n                    \u4F7F\u7528ES6\u5F00\u53D1Angular2\u5E94\u7528\u7684\u4E00\u4E2A\u597D\u5904\u5C31\u662F\uFF0C\u53EF\u4EE5\u4E0D\u7528\u62FC\u63A5\u6837\u5F0F\u5B57\u7B26\u4E32\u4E86\u3002\n                </p>\n                <ul>\n                    <li>\u5728\u6837\u5F0F\u4E2D\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u6807\u51C6\u7684CSS\u8BED\u6CD5</li>\n                    <li>\u5982\u679C\u6837\u5F0F\u5B9A\u4E49\u5728\u5355\u72EC\u7684\u6587\u4EF6\u91CC\uFF0C\u53EF\u4EE5\u4F7F\u7528styleUrls\u5F15\u5165</li>\n                </ul>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EzApp);
                return EzApp;
            }());
            angular2_1.bootstrap(EzApp);
        }
    }
});
//# sourceMappingURL=styles.js.map