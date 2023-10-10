import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, UserRating } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  private readonly URL: string = 'http://localhost:4000/api/movies';

  getMovies = (): Observable<Movie[]> => {
    return this.httpClient.get<Movie[]>(this.URL);
  }

  getMovieById = (movieId: string): Observable<Movie> => {
    return this.httpClient.get<Movie>(`${this.URL}/${movieId}`);
  }

  rateMovie = (movieId: string, rating: UserRating): Observable<Movie> => {
    return this.httpClient.patch<Movie>(`${this.URL}/${movieId}/rate`, rating)
  }

}
