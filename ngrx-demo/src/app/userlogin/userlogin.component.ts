import { Component, OnInit } from '@angular/core';
import {MydataService} from "../services/mydata.service"

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  cmnt:any;
  constructor(private comment:MydataService) { }

  ngOnInit(): void {
    this.comment.myapi().subscribe((data)=>{
      console.log(data);
      this.cmnt=data;
      for (let i=0;i<data.length;i++){

      this.comment.listappend("Id : "+data[i].id+"     -     "+"Name : " + data[i].name,'elcontainer3251')
      }
    })

  }

}
