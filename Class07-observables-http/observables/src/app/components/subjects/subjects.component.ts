import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  movieInput: string = '';

  constructor(private readonly moviesService: MoviesService){}

  setMovie(): void {
    this.moviesService.setMovie(this.movieInput);
    this.moviesService.addMovie(this.movieInput);
    this.movieInput = '';
  }
}
