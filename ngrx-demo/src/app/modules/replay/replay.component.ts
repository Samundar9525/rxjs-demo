import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  userlist1:any = ["Default"];
  userlist2:any = [];
  userlist3:any= [];


  // subscription flage

  subflag1: boolean = false;
  subflag2: boolean = false;
  toggleflag:boolean=true


  //subscription
  subs1!: Subscription;
  subs2!: Subscription;
  subtoggle!:Subscription

  constructor(private design: MydataService) { }

  ngOnInit(): void {
    this.design.videoemit.subscribe(res => {
      this.userlist1.push(res);
      console.log(res)
    })

  }

  myframe(){
    if (this.toggleflag){
      const frame=interval(1000)
      this.subtoggle= frame.subscribe(res=>{
        this.design.videoemit.next("Instance "+res.toString())})

    }
    else{
      this.subtoggle.unsubscribe()

    }
    this.toggleflag=!this.toggleflag


  }



  onvideoadd(video: any) {
    //  console.log(video);
    this.design.videoemit.next(video)

  }

  user2sub() {
    if (this.subflag1){
      this.subs1.unsubscribe()
      }
      else{

        this.subs1=this.design.videoemit.subscribe(res=>{
          this.userlist2.push(res)
      })
  }
  this.subflag1 = !this.subflag1
}

  user3sub() {

    if (this.subflag2){
      this.subs2.unsubscribe()
      }
      else{

        this.subs2=this.design.videoemit.subscribe(res=>{
          this.userlist3.push(res)
      })
  }
  this.subflag2 = !this.subflag2
  }





}
