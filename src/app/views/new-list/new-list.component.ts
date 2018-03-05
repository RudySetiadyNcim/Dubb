import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
  providers: [MovieService]
})
export class NewListComponent implements OnInit {

  movies: Array<any>;

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getNewMovies().subscribe(data => {
      this.movies = data;
    });
  }  

}
