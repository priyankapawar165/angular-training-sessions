
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

title:string="Learning is Fun";
schoolName:string="Numpy Ninja";
studentList:any[]=[];
studentName:string="";
  constructor() { }

  ngOnInit(): void {
  }

getStudentList(){
  this.studentList=["Sam","Tom","John"];
}
  

}

