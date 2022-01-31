import { Component, OnInit } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, tap, min, toArray } from 'rxjs/operators';
import { of, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  grade1=new Array();
  grade2=new Array();
  grade3=new Array();
  grade4=new Array();

  constructor() { }
  studdata:any;
  ngOnInit(): void {


    const data = fromFetch("https://api.npoint.io/06cb206e674e0f7cee09").pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      })
    );
    data.pipe(
      tap(res=>{
        for(let i=0;i<res.length;i++){
          const m=(Math.min(res[i].marks["10th"] ,res[i].marks["12th"],res[i].marks["graduation"]*100,res[i].marks["post-graduation"]*100 ))
          // console.log(res[i])
          if(m>=80){
            this.grade1.push(res[i])
            // console.log(res[i]);


          }
          else if (m>=70 && m<80 ){
          this.grade2.push(res[i])
          // console.log(res[i]);
          }
          else if (m>=60 && m<70 ){
            this.grade3.push(res[i])
            }
          else{
            this.grade4.push(res[i])
          }
      }

      }),


    ).subscribe(res=>{
      console.log("data ==>",this.grade2)

    });


  }

gradeone(){
  this.studdata=this.grade1;
}

gradetwo(){
  this.studdata=this.grade2;
}
gradethree(){
  this.studdata=this.grade3;
}

gradefour(){
  this.studdata=this.grade4;
}


}
