import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  randomNumberSubscription: Subscription;

  numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
  numbersObservable: Observable<number[]> = of([10,9,8,7,6,5,4,3,2,1]);
  // numbersObservable: Observable<number[]> = of(this.numbers);

  // Observable that completes
  simpleObservable: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  // Observable that never completes
  randomObservable: Observable<number> = new Observable<number>((observer) => {
    setInterval(() => {
      const randomNumber: number = Math.floor(Math.random() * 10);
      observer.next(randomNumber);
    }, 1000);
  })

  // Observable that throws an error
  randomErrorObservable = new Observable<number>((observer) => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      if (randomNumber === 7) {
        observer.error(new Error('Generated number is 7. This is an error.'));
      } else {
        observer.next(randomNumber); // Emit the random number if it's not 7
      }
    }, 1000);
  });


  ngOnInit(): void {
    // console.log(this.numbers);
    // console.log(this.numbersObservable);
    // this.numbersObservable.subscribe(result => console.log(result));

    // this.simpleObservable.subscribe({
    //   next: (value) => console.log(value),
    //   error: (err) => console.error(`Error: ${err}`),
    //   complete: () => console.log('Obsevable completed!')
    // })

    // this.randomNumberSubscription = this.randomObservable.subscribe({
    //   next: (value) => console.log(`Random number: ${value}`)
    // });

    // this.randomErrorObservable.subscribe({
    //   next: (value) => console.log(`Random number: ${value}`)
    // });
  }

  // ngOnDestroy(): void {
  //   this.randomNumberSubscription.unsubscribe();
  // }

}
