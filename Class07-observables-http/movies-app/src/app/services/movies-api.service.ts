import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private readonly MOVIES_API = 'http://localhost:4000/api/movies';

  constructor(private readonly httpClient: HttpClient) {}

  // getMovies = (): Observable<any> => {
  //   return this.httpClient.get(this.MOVIES_API);
  // };

  getMovies = (): Observable<Movie[]> => {
    return this.httpClient.get<Movie[]>(this.MOVIES_API);
  };



  // getMovieById = (id: string) => {
  //   return this.httpClient.get(`${this.MOVIES_API}/${id}`)
  // }

  getMovieById = (id: string): Observable<Movie> => {
    return this.httpClient.get<Movie>(`${this.MOVIES_API}/${id}`)
  }

  

  // createMovie = (createMovieData: any) => {
  //   return this.httpClient.post(this.MOVIES_API, createMovieData);
  // };

  // deleteMovie = (movieId: string) => {
  //   return this.httpClient.delete(`${this.MOVIES_API}/${movieId}`);
  // };
}