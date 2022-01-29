import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, fromEvent, map } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit ,AfterViewInit {

  @ViewChild('myinput1') myinput1!: ElementRef;
  @ViewChild('myinput2') myinput2!: ElementRef;
  @ViewChild('myinput3') myinput3!: ElementRef;
  constructor( private list:MydataService ) { }
  name:any;
  debounceres1:any
  debounceres2:any
  changeuntil:any;
  status1:boolean=false;
  status2:boolean=false;
  status3:boolean=false;

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    const searchtag=fromEvent<any>(this.myinput1.nativeElement,'keyup').pipe(
      map(event=>event.target.value),

    )
    searchtag.subscribe(res=>{
      this.status1=true
      this.debounceres1=res
      this.list.listappend(res,'elcontainer3331')
      console.log(res);

      setTimeout(() => {
        this.debounceres1=null
        this.status1=false
      }, 1000);
    })

    const searchta=fromEvent<any>(this.myinput2.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(500)
    )
    searchta.subscribe(res=>{
      this.status2=true
      this.debounceres2=res
      this.list.listappend(res,'elcontainer3332')
      console.log(res);

      setTimeout(() => {
        this.status2=false
        this.debounceres2=null
      }, 1000);
    })

    const changeuntil=fromEvent<any>(this.myinput3.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(1500),
     distinctUntilChanged()
    )
    changeuntil.subscribe(res=>{
      this.status3=true
      this.changeuntil=res
      this.list.listappend(res,'elcontainer3333')
      console.log(res);

      setTimeout(() => {
        this.status3=false
        this.changeuntil=null
      }, 2000);
    })



  }

}
