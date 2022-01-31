import { Component, OnInit } from '@angular/core';
import { concat, delay, from, interval, map, merge, take} from 'rxjs';
import { MydataService } from 'src/app/services/mydata.service';


@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {
  animal=['tiger','Bear','Lion','deer','zebra','fox']
  bird= ['pigeon','dove','cukoo','eagle','vulture','penguin']
  food= ['pizza','samosa','burger','idli','dosai','litti']


  constructor( private  list :MydataService) { }

  animalstream=interval(1000).pipe(take(this.animal.length),map(re=> this.animal[re]+'----- A'))
  foodstream=interval(1500).pipe(take(this.food.length),map(re=>this.food[re]+'----- F'))
  birdstream=interval(2000).pipe(take(this.bird.length),map(re=>this.bird[re]+'----- B'))


  concatstream=concat(this.animalstream,this.foodstream,this.birdstream)

  ngOnInit(): void {
    this.concatstream.subscribe(res=>{
      this.list.listappend(res,'elcontainer567')

    })
  }

}
