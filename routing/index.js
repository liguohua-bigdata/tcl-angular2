System.register(['./inbox-app', 'angular2/angular2', 'angular2/bootstrap', 'angular2/router', 'angular2/src/core/reflection/reflection', 'angular2/src/core/reflection/reflection_capabilities'], function(exports_1) {
    var inbox_app_1, angular2_1, bootstrap_1, router_1, reflection_1, reflection_capabilities_1;
    function main() {
        reflection_1.reflector.reflectionCapabilities = new reflection_capabilities_1.ReflectionCapabilities();
        bootstrap_1.bootstrap(inbox_app_1.InboxApp, [router_1.routerBindings(inbox_app_1.InboxApp), angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
    }
    exports_1("main", main);
    return {
        setters:[
            function (inbox_app_1_1) {
                inbox_app_1 = inbox_app_1_1;
            },
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (reflection_1_1) {
                reflection_1 = reflection_1_1;
            },
            function (reflection_capabilities_1_1) {
                reflection_capabilities_1 = reflection_capabilities_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map