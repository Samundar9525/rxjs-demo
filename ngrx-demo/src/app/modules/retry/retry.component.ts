import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  person:any
  constructor(private http:HttpClient) { }
  fetching:boolean=false
  status="No data"


  ngOnInit(): void {

  }
  fetchdetail(){
    this.fetching=true
    this.http.get("https://api.npoint.io/f08cb87f1a40739840be").pipe(
      // retry(5)
      retryWhen(err=>{
        return err.pipe(
          delay(3000), scan((retrycount) => {
            if (retrycount >= 5) {
              throw err;
            } else {
              retrycount++;
              console.log("retry count => ", retrycount);
              this.status="Retrying attempt #"+retrycount;
              return retrycount;
            }
          }, 0)
        );
      })

    ).subscribe(res=>{
      console.log(res);
      this.person=res
      this.fetching=false
      this.status="fetched data Sucessfully"
    },
    (err)=>{
      console.log(err);
      this.fetching=false
      this.status="Problem Encountered"
    }
    )


  }

}
