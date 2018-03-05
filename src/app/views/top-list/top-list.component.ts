import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss'],
  providers: [ MovieService ]
})
export class TopListComponent implements OnInit {

  movies: Array<any>;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getTopMovies().subscribe(data => {
      this.movies = data;
    })
  }

}
