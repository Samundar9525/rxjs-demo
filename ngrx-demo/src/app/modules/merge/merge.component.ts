import { Component, OnInit } from '@angular/core';
import { interval, take, map, concat, merge } from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  animal=['tiger','Bear','Lion','deer','zebra','fox']
  bird= ['pigeon','dove','cukoo','eagle','vulture','penguin']
  food= ['pizza','samosa','burger','idli','dosai','litti']


  constructor( private  list :MydataService) { }

  animalstream=interval(1000).pipe(take(this.animal.length),map(re=> this.animal[re]+'----- A'))
  foodstream=interval(1500).pipe(take(this.food.length),map(re=>this.food[re]+'----- F'))
  birdstream=interval(2000).pipe(take(this.bird.length),map(re=>this.bird[re]+'----- B'))


  concatstream=merge(this.animalstream,this.foodstream,this.birdstream)

  ngOnInit(): void {
    this.concatstream.subscribe(res=>{
      this.list.listappend(res,'elcontainer587')

    })
  }

}
