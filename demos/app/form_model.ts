//our root app component
import {
  Component,
  View,
  Control,
  ControlGroup,
  ControlArray,
  Validators,
  bootstrap,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/angular2'

@Component({
  selector: 'my-app',
})



@View({
  template: `
    <div>
      <h2>Angular2 Control &amp; ControlGroup Example</h2>
      <form [ng-form-model]="formGroup">
        <div ng-control-group="name">
          <h3>Enter your name:</h3>
          <p>First: <input ng-control="first"><span *ng-if="!ctrlFirst.valid"> [required]</span></p>
          <p>Middle: <input ng-control="middle"></p>
          <p>Last: <input ng-control="last"><span *ng-if="!ctrlLast.valid"> [required]</p>
        </div>
        <h3>What's your favorite food?</h3>
        <p><input ng-control="food"><span *ng-if="!ctrlFood.valid"> [required]</span></p>
        <h3>Name a few cities:</h3>
        <ul ng-control-group="cities">
          <li *ng-for="#ctrl of ctrlCities; #i = index"><input ng-control="{{i}}"></li>
        </ul>
        <button type="button" (click)="addCity()">Add a city</button>
      </form>
      <h3>Value:</h3>
      <pre>{{cgValue}}</pre>
      <h3>Validity:</h3>
      <pre>{{formGroup.valid}}</pre>
    </div>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class App {
  ctrlFirst: Control = new Control('larry', Validators.required);
  ctrlMiddle: Control =  new Control('');
  ctrlLast: Control =  new Control('', Validators.required);
  ctrlFood: Control = new Control('pizza', Validators.required);
  ctrlCities: Control[] = [
    new Control('1'),
    new Control('2'),
    new Control('3')
  ];
  citiesArray: ControlArray = new ControlArray(this.ctrlCities);
  
  formGroup: ControlGroup = new ControlGroup({
    name: new ControlGroup({
      first: this.ctrlFirst,
      middle: this.ctrlMiddle,
      last: this.ctrlLast
    }),
    food: this.ctrlFood,
    cities: this.citiesArray
  });
  
  get cgValue(): string {
    return JSON.stringify(this.formGroup.value, null, 2);
  }
  
  addCity(): void {
    this.citiesArray.push(new Control('4'));
  }
}


bootstrap(App);  