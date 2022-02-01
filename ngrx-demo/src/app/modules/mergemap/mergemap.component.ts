import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, map, mergeAll, mergeMap, of, Subscription, tap, toArray } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  url1="https://api.npoint.io/f08cb87f1a40739840be"
  url2="https://api.npoint.io/629ee0c3ea2bac848366"
  url3="https://api.npoint.io/1e8860e6c0f1e40247e8"

  flag1:boolean=false
  flag2:boolean=false
  flag3:boolean=false
  sub1!:Subscription
  sub2!:Subscription
  sub3!:Subscription


  mydata:any=[];
  api1=this.http.get(this.url1)
  api2=this.http.get(this.url2)
  api3=this.http.get(this.url3)
  // source=from([this.api1,this.api2,this.api3]);
  source=from(["Samundar","Mukesh","Sabbir"])
  constructor(private http: HttpClient,private list:MydataService) { }

getdata(data:any){
  return of("Hello  "+data);
}

  ngOnInit(): void {
  }

// Ex 1 : normal method:
mapmethod(){
  this.source.pipe(
    map(re=>this.getdata(re)),
    ).subscribe(res=>{
    this.list.listappend(res,"elcontainer009")
  })
  this.flag1=true

}

// Ex 2 : mergeall method:
mergeallmethod(){
  this.source.pipe(
    map(re=>this.getdata(re)),
    mergeAll()
    ).subscribe(res=>{
    this.list.listappend(res,"elcontainer010")

  })
  this.flag2=true

}
// Ex 3 : Merge map  method:
mergemapmethod(){
  this.source.pipe(
    mergeMap(re=>this.getdata(re))
    ).subscribe(res=>{
    this.list.listappend(res,"elcontainer011")

  })
  this.flag3=true

}






}
