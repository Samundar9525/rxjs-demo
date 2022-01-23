import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
