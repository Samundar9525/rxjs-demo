import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor(private list :MydataService) { }





  ngOnInit(): void {

    const employee=from([
      {fname:"samundar",lname:"singh",age:26,phone:111111},
      {fname:"mukesh",lname:"patel",age:23,phone:22222222},
      {fname:"anjan",lname:"kumar",age:24,phone:333333333},
      {fname:"ghanshyam",lname:"jha",age:22,phone:4444444},
      {fname:"rishav",lname:"kashyap",age:21,phone:555555},
      {fname:"shabbir",lname:"Alam",age:22,phone:99999999},
      {fname:"rohan",lname:"singh",age:21,phone:888888888},
    ])


    employee.subscribe(res=>{
      this.list.listappend(JSON.stringify(res),'elcontain331')
    }
    )

    employee.pipe(
      pluck('phone')
    ).subscribe(res=>{
      this.list.listappend("plucked phone.no:"+JSON.stringify(res),'elcontain332')
    })






  }

}
