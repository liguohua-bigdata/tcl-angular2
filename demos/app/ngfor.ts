
import {Component,View,bootstrap,NgFor} from "angular2/angular2";


@Component({
    selector: "ez-star"
})
@View({
    directives: [NgFor],
    template: `
        <div>
            <h2>{{actor}} - Films</h2>
            <ul>
                <li *ng-for="#film of films;#i=index">{{i}}.{{film}}</li>
            </ul>
        </div>
    `
})
class EzStar {
    actor: string;
    films: Array<string>;
    constructor() {
        this.actor = "Jason Statham";
        this.films = [
            "Mechanic: Rescurrection / 2016",
            "Spy / 2015",
            "Furious 7 /2015",
            "Wild Card / 2015",
            "The Expendables / 2014",
            "Home Front / 2013",
            "Hummingbird / 2013",
            "Fast & Furious 6 / 2013",
            "Parker / 2013"
        ];
    }
}


@Component({selector:"ez-app"})
@View({
	directives:[EzStar],
	template:`
    	<ez-star></ez-star>
    `
})
class EzApp{}

bootstrap(EzApp);