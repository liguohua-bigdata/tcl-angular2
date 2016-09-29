//引入NgSwitch类型
import {Component,View,bootstrap,CORE_DIRECTIVES} from "angular2/angular2";


@Component({
    selector : "ez-promotion",
    properties:["gender"]
})
@View({
    directives:[CORE_DIRECTIVES],
    styles: [`
           img{max-width:50%;}
    `],
    template : `
        <div [ng-switch]="gender">
            <template ng-switch-when="Male">
                <img src="statics/images/male-ad.jpg">
            </template>
            <template ng-switch-when="Female">
                <img src="statics/images/female-ad.jpg">
            </template>
            <template ng-switch-default>
                <h1>Learn Something, NOW!</h1>
            </template>                    
        </div>
    `
})
class EzPromotion{}


@Component({selector:"my-app"})
@View({
    directives:[EzPromotion,CORE_DIRECTIVES],
    template:`
        <ez-promotion [gender]="gender"></ez-promotion>
        <button *ng-if="gender!='Male'" (click)="changeToMale()">Change to Male</button> <p>
        <button *ng-if="gender!='Female'" (click)="changeToFemale()">Change to Female</button>
    `
})
class App{
    gender: string;
    constructor(){
        this.gender = "Female";
    }
    changeToMale(){
        this.gender = "Male";
    }

    changeToFemale(){
        this.gender = "Female";
    }
}



bootstrap(App);