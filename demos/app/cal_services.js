System.register([], function(exports_1) {
    var CalService;
    return {
        setters:[],
        execute: function() {
            //定义一个简单的算法服务类
            CalService = (function () {
                function CalService() {
                }
                CalService.prototype.add = function (a, b) { return a + b; };
                CalService.prototype.sub = function (a, b) { return a - b; };
                return CalService;
            })();
            exports_1("CalService", CalService);
        }
    }
});
//# sourceMappingURL=cal_services.js.map