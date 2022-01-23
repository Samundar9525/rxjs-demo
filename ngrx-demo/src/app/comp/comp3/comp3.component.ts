import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  usrname=""
  constructor(private design:MydataService) {
   this.design.username.subscribe(res=>{
      this.usrname=res
    })
  }

  ngOnInit(): void {

  }

onchange(val:string){
  console.log(val)
  this.design.username.next(val)
}
}
