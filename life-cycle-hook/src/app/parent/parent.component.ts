import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
ngOnChanges() {
    this.log('onChanges');
  }

  ngOnInit() {
    this.log('onInit');
  }

  ngDoCheck() {
    this.log('doCheck');
  }

  ngAfterContentInit() {
    this.log('afterContentInit');
  }

  ngAfterContentChecked() {
    this.log('afterContentChecked');
  }

  ngAfterViewInit() {
    this.log('afterViewInit');
  }

  ngAfterViewChecked() {
    this.log('afterViewChecked');
  }

  log(cycleHook) {
    console.log(`%c${this.constructor.name}` + `: %c${cycleHook}`, 'background: #0000FF; color: #FFFF;', 'background: #222; color: #bada55; font-size: 1.01rem')
  }

}