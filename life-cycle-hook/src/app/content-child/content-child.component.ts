import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {

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
    console.log(`%c${this.constructor.name}` + `: %c${cycleHook}`, 'background: #FF0000; color: #FFFF;', 'background: #222; color: #bada55; font-size: 1.01rem')
  }

}