import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';

  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor(breakpointObserver: BreakpointObserver) {
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
 ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }


}
