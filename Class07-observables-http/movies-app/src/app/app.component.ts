import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Movie } from './interfaces/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movies-app';

  movies: Movie[] = [] as Movie[];
  selectedMovie: Movie | null;

  isFetching: boolean;

  constructor(private readonly moviesService: MoviesService){}

  ngOnInit(): void {    
    this.moviesService.getMovies();
    this.moviesService.movies$.subscribe(moviesResponse => this.movies = moviesResponse);

    this.moviesService.isFetching$.subscribe((isFetchingResponse) => (this.isFetching = isFetchingResponse));
  }

  getAllMovies = () => {
    console.log(this.movies);
    return this.movies;
  }

  getMovieById = (movieId: string) => {
    this.moviesService.getMovieById(movieId);
    this.moviesService.selectedMovie$.subscribe(movieResponse => {
      console.log(movieResponse)
      this.selectedMovie = movieResponse;
    });
    
  }
}
