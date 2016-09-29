System.register(['angular2/angular2', 'angular2/router', './data', 'angular2/src/core/facade/async', 'angular2/src/core/facade/collection', 'angular2/src/core/facade/lang'], function(exports_1) {
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
    var angular2_1, router_1, db, async_1, collection_1, lang_1;
    var InboxRecord, DbService, InboxDetailCmp, InboxCmp, DraftsCmp, InboxApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (db_1) {
                db = db_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            InboxRecord = (function () {
                function InboxRecord(data) {
                    if (data === void 0) { data = null; }
                    this.id = '';
                    this.subject = '';
                    this.content = '';
                    this.email = '';
                    this.firstName = '';
                    this.lastName = '';
                    this.date = '';
                    this.draft = false;
                    if (lang_1.isPresent(data)) {
                        this.setData(data);
                    }
                }
                InboxRecord.prototype.setData = function (record) {
                    this.id = record['id'];
                    this.subject = record['subject'];
                    this.content = record['content'];
                    this.email = record['email'];
                    this.firstName = record['first-name'];
                    this.lastName = record['last-name'];
                    this.date = record['date'];
                    this.draft = record['draft'] == true;
                };
                return InboxRecord;
            })();
            DbService = (function () {
                function DbService() {
                }
                DbService.prototype.getData = function () {
                    var p = async_1.PromiseWrapper.completer();
                    p.resolve(db.data);
                    return p.promise;
                };
                DbService.prototype.drafts = function () {
                    return async_1.PromiseWrapper.then(this.getData(), function (data) {
                        return collection_1.ListWrapper.filter(data, (function (record) { return lang_1.isPresent(record['draft']) && record['draft'] == true; }));
                    });
                };
                DbService.prototype.emails = function () {
                    return async_1.PromiseWrapper.then(this.getData(), function (data) {
                        return collection_1.ListWrapper.filter(data, (function (record) { return !lang_1.isPresent(record['draft']); }));
                    });
                };
                DbService.prototype.email = function (id) {
                    return async_1.PromiseWrapper.then(this.getData(), function (data) {
                        for (var i = 0; i < data.length; i++) {
                            var entry = data[i];
                            if (entry['id'] == id) {
                                return entry;
                            }
                        }
                    });
                };
                DbService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DbService);
                return DbService;
            })();
            InboxDetailCmp = (function () {
                function InboxDetailCmp(db, params) {
                    var _this = this;
                    this.record = new InboxRecord();
                    this.ready = false;
                    var id = params.get('id');
                    async_1.PromiseWrapper.then(db.email(id), function (data) { _this.record.setData(data); });
                }
                InboxDetailCmp = __decorate([
                    angular2_1.Component({ selector: 'inbox-detail' }),
                    angular2_1.View({ templateUrl: "inbox-detail.html", directives: [angular2_1.NgFor, router_1.RouterLink] }), 
                    __metadata('design:paramtypes', [DbService, router_1.RouteParams])
                ], InboxDetailCmp);
                return InboxDetailCmp;
            })();
            InboxCmp = (function () {
                function InboxCmp(router, db) {
                    var _this = this;
                    this.router = router;
                    this.items = [];
                    this.ready = false;
                    async_1.PromiseWrapper.then(db.emails(), function (emails) {
                        _this.ready = true;
                        _this.items = emails.map(function (data) { return new InboxRecord(data); });
                    });
                }
                InboxCmp = __decorate([
                    angular2_1.Component({ selector: 'inbox' }),
                    angular2_1.View({ templateUrl: "inbox.html", directives: [angular2_1.NgFor, router_1.RouterLink] }), 
                    __metadata('design:paramtypes', [router_1.Router, DbService])
                ], InboxCmp);
                return InboxCmp;
            })();
            DraftsCmp = (function () {
                function DraftsCmp(router, db) {
                    var _this = this;
                    this.router = router;
                    this.items = [];
                    this.ready = false;
                    async_1.PromiseWrapper.then(db.drafts(), function (drafts) {
                        _this.ready = true;
                        _this.items = drafts.map(function (data) { return new InboxRecord(data); });
                    });
                }
                DraftsCmp = __decorate([
                    angular2_1.Component({ selector: 'drafts' }),
                    angular2_1.View({ templateUrl: "drafts.html", directives: [angular2_1.NgFor, router_1.RouterLink] }), 
                    __metadata('design:paramtypes', [router_1.Router, DbService])
                ], DraftsCmp);
                return DraftsCmp;
            })();
            InboxApp = (function () {
                function InboxApp(router, location) {
                    this.router = router;
                    this.location = location;
                }
                InboxApp.prototype.inboxPageActive = function () { return this.location.path() == ''; };
                InboxApp.prototype.draftsPageActive = function () { return this.location.path() == '/drafts'; };
                InboxApp = __decorate([
                    angular2_1.Component({ selector: 'inbox-app', viewBindings: [DbService] }),
                    angular2_1.View({ templateUrl: "inbox-app.html", directives: [router_1.RouterOutlet, router_1.RouterLink] }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: InboxCmp, as: 'Inbox' }),
                        new router_1.Route({ path: '/drafts', component: DraftsCmp, as: 'Drafts' }),
                        new router_1.Route({ path: '/detail/:id', component: InboxDetailCmp, as: 'DetailPage' })
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], InboxApp);
                return InboxApp;
            })();
            exports_1("InboxApp", InboxApp);
        }
    }
});
//# sourceMappingURL=inbox-app.js.map