import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MydataService } from '../services/mydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor(private design:MydataService,breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Handset,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      console.log(result);

    });


  }
  exclusive:boolean=false;
  ngOnInit(): void {

    this.design.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
