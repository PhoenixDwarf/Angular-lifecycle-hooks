import {
  afterEveryRender,
  afterNextRender,
  Component,
  effect,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(' ')}`,
    'color:rgb(118, 150, 12);'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  traditionalProperty = 'Edwin';
  signalProperty = signal('Edwin');

  constructor() {
    log('Constructor called');

    setTimeout(() => {
      this.traditionalProperty = 'Nemeguen';
      // this.signalProperty.set('Nemeguen');
      console.log('SetTimeout called');
    }, 2000);
  }

  changeTraditionalProperty() {
    this.traditionalProperty = 'Fabian';
  }

  changeSignalProperty() {
    this.signalProperty.set('Fabian');
  }

  basicEffect = effect((onCleanup) => {
    log(
      'effect',
      'Runs once after the component is initiated and every time an internal signal gets updated.'
    );

    onCleanup(() => {
      log('onCleanup', 'Runs once before the effect or component is destroyed');
    });
  });

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

  ngOnDestroy() {
    log('ngOnDestroy called', '	Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() =>
    log(
      'afterNextRender called',
      'Runs once the next time that all components have been rendered to the DOM.'
    )
  );

  afterEveryRenderEffect = afterEveryRender(() =>
    log(
      'afterEveryRender called',
      '	Runs every time all components have been rendered to the DOM.'
    )
  );
}
