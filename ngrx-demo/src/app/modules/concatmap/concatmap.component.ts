import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, from, map, mergeMap, of, Subscription } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  flag1:boolean=false
  flag2:boolean=false
  flag3:boolean=false

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
concatallmethod(){
  this.source.pipe(
    map(re=>this.getdata(re)),
    concatAll()
    ).subscribe(res=>{
    this.list.listappend(res,"elcontainer010")

  })
  this.flag2=true

}
// Ex 3 : Merge map  method:
concatmapmethod(){
  this.source.pipe(
    concatMap(re=>this.getdata(re))
    ).subscribe(res=>{
    this.list.listappend(res,"elcontainer011")

  })
  this.flag3=true;

}


}
