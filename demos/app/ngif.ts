import {Component, View, CORE_DIRECTIVES, Output,
		Directive, bootstrap, EventEmitter} from "angular2/angular2"




@Directive({
	selector: "interval-dir"
})

class IntervalDir {
	@Output() everySecond = new EventEmitter();
	@Output('everyFiveSeconds') five5Secs = new EventEmitter();

	constructor() {
	 	setInterval(() => this.everySecond.next("event"), 1000);
	 	setInterval(() => this.five5Secs.next("event"), 5000);
	}
}

@Component({
	selector: "my-app"
})
@View({
	template : `
		<p *ng-if="hidden"> I am hidden now</p>
		<p *ng-if="!hidden"> I am visible now</p>
		<interval-dir (every-second)="everySecond()" 
			(every-five-seconds)="everyFiveSeconds()"></interval-dir>
		<button (click)="toggle()"> Toggle status</button>
	`,

	directives: [CORE_DIRECTIVES,IntervalDir]
})

class App{
	hidden: boolean;
	constructor(){
		this.hidden = false;
	}

	everySecond(){
		console.log("every second")
	}

	everyFiveSeconds(){
		console.log("every five seconds")
	}

	toggle(){
		this.hidden = !this.hidden;
	}
}

bootstrap(App);