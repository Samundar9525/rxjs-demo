import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscriber, Subscription, tap } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  names=["samundar","Rishav","Mukesh","Sabbir","ghanshyam","priya","sneha",]
  sub1!:Subscription;
  sub2!:Subscription;
  constructor(private list :MydataService) { }

  ngOnInit(): void {

    const student=interval(100)
    this.sub1=student.pipe(
      map(re=>{this.names[re];
      if (re>4){
        this.sub1.unsubscribe()
      }
      })
    ).subscribe(res=>{
      this.list.listappend(res,'elcontain33')
      console.log(res);
    })

    const student2=interval(100)
    this.sub2=student.pipe(
      tap(res=>{
        if (res>4){
          this.sub2.unsubscribe()
        }
      }),
      map(re=>this.names[re])
    ).subscribe(res=>{
      this.list.listappend(res,'elcontain34')
      console.log(res);
    })

  }

}
