System.register(["angular2/angular2", "angular2/router"], function(exports_1) {
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
    var angular2_1, router_1;
    var Video, Music, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Video组件
            Video = (function () {
                function Video() {
                }
                Video = __decorate([
                    angular2_1.Component({ selector: "my-video" }),
                    angular2_1.View({
                        template: "\n            <h1>I LOVE THIS VIDEO!</h1>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Video);
                return Video;
            })();
            //Music 组件
            Music = (function () {
                function Music(params) {
                    this.id = params.get('id');
                }
                Music = __decorate([
                    angular2_1.Component({ selector: "my-music" }),
                    angular2_1.View({
                        template: "\n            <h1>THAT'S FANTASTIC MUSIC!, RoutParams: {{id}}</h1>\n        "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Music);
                return Music;
            })();
            //App组件
            App = (function () {
                function App(location) {
                    location.go('/video');
                }
                App = __decorate([
                    angular2_1.Component({ selector: "my-app" }),
                    angular2_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    \t<!--\u58F0\u660E\u8DEF\u7531\u5165\u53E3-->\n    \t<nav>\n        \t<b [router-link]=\"['/Video']\">video</b> | \n        \t<b [router-link]=\"['/Music', {id:'xx'}]\">music</b>\n        </nav>\n        <main>\n        \t<!--\u58F0\u660E\u8DEF\u7531\u51FA\u53E3-->\n        \t<router-outlet></router-outlet>\n        </main>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: "/video", component: Video, as: "Video" },
                        { path: "/music/:id", component: Music, as: "Music" }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App, [
                router_1.routerBindings(App),
                angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]);
        }
    }
});
//# sourceMappingURL=router.js.map