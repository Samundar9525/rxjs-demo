import { Component, OnDestroy, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit ,OnDestroy {
  uname="Samundar"
  constructor(private designut:MydataService) {
    this.designut.username.subscribe(res=>{
      this.uname=res
    })
   }

  ngOnInit(): void {
    this.designut.exclusive.next(true);
  }


ngOnDestroy(): void {
  this.designut.exclusive.next(false);
}


}
