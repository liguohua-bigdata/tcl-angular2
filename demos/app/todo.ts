//TypeScript
import {Component, View, bootstrap, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
  selector: 'todo-list'
})
@View({
  styles:[`
      span.text{font-size:20px;}
      span.remove{cursor:pointer;}
  `],
  template: `
    <ul>
      <li *ng-for="#todo of todos;#i=index;">
        <span class='text'>{{ todo }}</span> <span class='remove' (click)="remove(i)">&times;</span>
      </li>
    </ul>
    <input  [(ng-model)]="todo" (keyup)="doneTyping($event, todo)">
    <button (click)="addTodo(todo)">Add Todo</button>
          `,
  directives: [NgFor, FORM_DIRECTIVES],


})
class TodoList {
  todos: Array<string>;
  todo: string;
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  remove(index:number){
    this.todos.splice(index,1);
  }

  reset(){
    this.todo = "";
  }

  addTodo(value:string) {
    this.todos.push(value);
    this.reset();
  }

  doneTyping($event: any, value:string) {
    if($event.which === 13) {
      this.addTodo(value);
      this.reset();
    }
  }
}
bootstrap(TodoList);