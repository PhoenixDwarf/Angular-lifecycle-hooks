import { Component } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(' ')}`,
    'color:rgb(118, 150, 12);'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor() {
    log('Constructor called');
  }

  ngOnInit() {
    log(
      'ngOnInit called',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }

  ngOnChanges() {
    log(
      'ngOnChanges called',
      "Runs every time the component's inputs have changed."
    );
  }

  ngDoCheck() {
    log(
      'ngDoCheck called',
      'Runs every time the change detection runs for this component.'
    );
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit called',
      "Runs once after the component's content (ng-content) has been initialized."
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked called',
      "Runs every time the component's content has been checked for changes."
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit called',
      "Runs once after the component's view and child views have been initialized."
    );
  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked called',
      "Runs every time the component's view and child views have been checked for changes."
    );
  }
}
