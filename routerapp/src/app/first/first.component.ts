import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {


  list: any;
  constructor(private fakeService: FakeService, private router: Router) { }

  ngOnInit(): void {


    this.fakeService.getList().subscribe(response => {

      this.list = response;

    },
      error => {

        this.newMethod(error);

      }

    )


  }


  private newMethod(err: any) {
   

    console.log('ERRRR' + err.message);
   
    const temp = err.message;

    console.log('Testmp' + temp);
    this.router.navigate(
      ['/pageNotFound'],
      { queryParams: { id: err.message } }
    );
  }
}