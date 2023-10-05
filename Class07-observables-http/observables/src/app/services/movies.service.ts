import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movie: Subject<string> = new Subject();

  movies: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  constructor() { }

  setMovie = (value: string): void => {
    console.log('Movie to be added: ', value);
    this.movie.next(value);
    console.log(this.movie.subscribe(res => console.log(res)));
  }

  addMovie = (value: string): void => {
    const valuesUpUntilNow = this.movies.getValue();
    console.log('Values up until now: ', valuesUpUntilNow);
    this.movies.next([...valuesUpUntilNow, value])
  }

}
