import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  error: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('test')
    this.route.queryParams
      .subscribe(param => {
        this.error = param['id']
      });
  }
}
