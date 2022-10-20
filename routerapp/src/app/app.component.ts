import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'routerapp';

  userName: string = '';
  password: string = '';

  no: number = 0;
  isArmstrong: boolean = false;


  submit() {

  }

  /**
   * 
   * find out an armstrong no
   */

  armStrong() {
    // step 1 : assign original no to another no
    var num1 = this.no;
    //step 2 : take variable for sum
    var sum = 0
    // step 3:  add a condition to get out from a loop when there is 0
    while (num1 > 0) {
      // Step 4:  get a remainder 
      var r = num1 % 10
      // step 6 :  do cube for remainder and do sum
      sum = sum + r * r * r
      // step 7:   divvide
      num1 = Math.floor(num1 / 10)
    }
    //step 8 :  match both nos
    if (this.no == sum) {
      this.isArmstrong = true;
    }
  }



  number: number = 0;
  isEvenArray: number[] = [];
  isEven = false;

  isOddEven() {
    this.isEvenArray = [];
    for (let i = 0; i <= this.number; i++)
      if (i % 2 == 0) {
        this.isEvenArray.push(i);
        this.isEven = true;
      }
      else {
        this.isEven = false;
      }



  }
num: number=0;
isDisplayNumbers:number[]=[];

xyz:number=0;

displayNumbers(){
  this.isDisplayNumbers=[]; 
for (let i=0;i<=this.xyz;i++) {
this.isDisplayNumbers.push(i);

}

}

}
