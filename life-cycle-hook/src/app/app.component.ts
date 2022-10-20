import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle-hook';

  checkHook :  boolean = false;
  checkLifeCycleHook(){
    this.checkHook = true;

  }
}
