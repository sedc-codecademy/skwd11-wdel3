import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MoviesApiService } from './movies-api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies = new BehaviorSubject<Movie[]>([]);
  movies$ = this.movies.asObservable();

  isFetching = new BehaviorSubject<boolean>(false);
  isFetching$ = this.isFetching.asObservable();

  selectedMovie = new BehaviorSubject<Movie | null>(null);
  selectedMovie$ = this.selectedMovie.asObservable();


  constructor(
    private readonly moviesApiService: MoviesApiService,
  ) { }

  getMovies = (): void => {
    this.isFetching.next(true);

    this.moviesApiService.getMovies().subscribe({
      next: (data) => {
        this.movies.next(data as Movie[]);
        this.isFetching.next(false);
      },
      error: (error) => {
        console.error('ERROR FETCHING MOVIES!', error);
        this.isFetching.next(false);
      },
    });
  };

  getMovieById = (id: string): void => {
    this.isFetching.next(true);

    this.moviesApiService.getMovieById(id).subscribe({
      next: (data) => {
        this.selectedMovie.next(data as Movie);
        this.isFetching.next(false);
      },
      error: (error) => {
        console.error('ERROR FETCHING MOVIE!', error);
        this.isFetching.next(false);
      },
    });
  };
}
