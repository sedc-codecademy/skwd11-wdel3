import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  numbersObservable: Observable<number[]> = of([1,2,3,4,5,6,7,8,9,10]);

  ngOnInit(): void {
    this.numbersObservable.subscribe(result => console.log(result));

    // this.numbersObservable.pipe(
    //   map((numbers) => numbers.filter((num) => num % 2 === 0)),
    //   map((evenNumbers) => evenNumbers.map((num) => num * 10))
    // ).subscribe({
    //   next: (value) => console.log(value)
    // })


    this.numbersObservable.pipe(
      map((numbers) => numbers.filter((num) => num % 2 === 0)),
      map((evenNumbers) => evenNumbers.map((num) => num * 10))
    ).subscribe(result => console.log(result))
  }

}
