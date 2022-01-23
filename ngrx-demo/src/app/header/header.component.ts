import { Component, OnInit } from '@angular/core';
import { MydataService } from '../services/mydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private design:MydataService) { }
  exclusive:boolean=false;
  ngOnInit(): void {

    this.design.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
  }

}
