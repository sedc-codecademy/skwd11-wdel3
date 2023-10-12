import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{

  movies: Movie[] = [];
  public isFetching: boolean = false;

  constructor(private readonly moviesService: MoviesService){}

  ngOnInit(): void {
    
  }

}