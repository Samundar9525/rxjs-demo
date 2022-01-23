import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  dataarr=[
    {id:1,name:'Samundar Singh',gender:'Male'},
    {id:2,name:'Rishav kashyap',gender:'Male'},
    {id:3,name:'Mukesh patel',gender:'Male'},
    {id:4,name:'priya',gender:'Female'},
    {id:5,name:'sophie',gender:'Female'},
    {id:6,name:'rohan',gender:'Male'},
    {id:7,name:'Sabbir',gender:'Male'},
    {id:8,name:'isha',gender:'Female'},
  ]

  data:any;
  data2:any;
  data3:any;


  constructor() { }

  ngOnInit(): void {

    const source=from(this.dataarr)


    // ex-01 filter by length

    source.pipe(
      filter(mem=>mem.name.length>6),
      toArray())
      .subscribe(res=>{
      this.data=res
      console.log(res);

    })


 // ex-02 filter by gender
    source.pipe(
      filter(mem=>mem.gender=="Female"),
      toArray())
      .subscribe(res=>{
      this.data2=res
      console.log(res);

    })


     // ex-03 filter by limited data
     source.pipe(
      filter(mem=>mem.id<=5),
      toArray())
      .subscribe(res=>{
      this.data3=res
      console.log(res);

    })








  }

}
