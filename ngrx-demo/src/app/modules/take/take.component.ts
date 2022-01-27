import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, mapTo, take, takeLast, takeUntil } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  name=["sam","sabbir","miku","chickoo","tuni","Anjan","Mukesh","Rishab","Ghanshyam","shubham","Abhijeet"]
  constructor(private list:MydataService) { }

  ngOnInit(): void {

    const obsenames=from(this.name)

    obsenames.pipe(
      take(5)
    ).subscribe(res=>{
      this.list.listappend(res,"elcontainer2345")
    })

    obsenames.pipe(
      takeLast(5)
    ).subscribe(res=>{
      this.list.listappend(res,"elcontainer2346")
    })

    const cond1=interval(200)
    const cond2=fromEvent(document,"click")

    cond1.pipe(
      takeUntil(cond2),
      map(res=>this.name[res])
    ).subscribe(res=>{
      this.list.listappend(res,"elcontainer2347")
    })




  }

}
