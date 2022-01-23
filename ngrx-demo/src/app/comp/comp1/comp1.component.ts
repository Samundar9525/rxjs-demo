import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
