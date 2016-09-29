System.register(['angular2/angular2'], function(exports_1, context_1) {
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
    var TodoList;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList() {
                    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
                }
                TodoList.prototype.remove = function (index) {
                    this.todos.splice(index, 1);
                };
                TodoList.prototype.reset = function () {
                    this.todo = "";
                };
                TodoList.prototype.addTodo = function (value) {
                    this.todos.push(value);
                    this.reset();
                };
                TodoList.prototype.doneTyping = function ($event, value) {
                    if ($event.which === 13) {
                        this.addTodo(value);
                        this.reset();
                    }
                };
                TodoList = __decorate([
                    angular2_1.Component({
                        selector: 'todo-list'
                    }),
                    angular2_1.View({
                        styles: ["\n      span.text{font-size:20px;}\n      span.remove{cursor:pointer;}\n  "],
                        template: "\n    <ul>\n      <li *ng-for=\"#todo of todos;#i=index;\">\n        <span class='text'>{{ todo }}</span> <span class='remove' (click)=\"remove(i)\">&times;</span>\n      </li>\n    </ul>\n    <input  [(ng-model)]=\"todo\" (keyup)=\"doneTyping($event, todo)\">\n    <button (click)=\"addTodo(todo)\">Add Todo</button>\n          ",
                        directives: [angular2_1.NgFor, angular2_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            }());
            angular2_1.bootstrap(TodoList);
        }
    }
});
//# sourceMappingURL=todo.js.map