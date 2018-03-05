import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  movies: Array<any>;
  movielist: Array<any>;

  movie = {};
  titleSearch = '';
  actorSearch = '';
  orderBySearch = 'release_dateAsc';  
  yearSearch = 'on';
  yearValSearch = '';
  minRatingSearch = '';
  maxRatingSearch = '';
  contentRatingSearch = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) { 
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movielist = this.movies = data;
    });
  }

  filterData() {

    this.movielist = this.movies.filter(function(oMovie) {
      var matches = true;

      if(this.titleSearch != '') {
        if(!(oMovie.title.toLowerCase().includes(this.titleSearch.toLowerCase()))) {
          matches = false;
        }
      }

      if(this.actorSearch) {
        if(!(oMovie.actors.toLowerCase().includes(this.actorSearch.toLowerCase()))) {
          matches = false;
        }
      }

      if(this.yearValSearch) {
        switch(this.yearSearch)
        {
            case "on":
              if(!(oMovie.year == parseInt(this.yearValSearch))) {
                matches = false;
              }
              break;
            case "before":
              if(!(oMovie.year < parseInt(this.yearValSearch))) {
                matches = false;
              }
              break;
            case "after":
              if(!(oMovie.year > parseInt(this.yearValSearch))) {
                matches = false;
              }
              break;
        }
      }

      if(this.minRatingSearch) {
        if(!(oMovie.imdb_rating >= parseInt(this.minRatingSearch))) {
          matches = false;
        }
      }

      if(this.maxRatingSearch) {
        if(!(oMovie.imdb_rating <= parseInt(this.maxRatingSearch))) {
          matches = false;
        }
      }

      if(this.contentRatingSearch) {
        if(!(oMovie.rated.toLowerCase() === this.contentRatingSearch.toLowerCase())) {
          matches = false;
        }
      }      

      return matches;
    }.bind(this));      

    switch(this.orderBySearch)
    {
      case "release_dateDesc":
        this.movielist.sort(function(a, b) { 
          if(a.released_date < b.released_date)
            return 1;
          else if(a.released_date > b.released_date)
            return -1;
          return 0;
        });
        break;
      case "release_dateAsc":
        this.movielist.sort(function(a, b) { 
          if(a.released_date > b.released_date)
            return 1;
          else if(a.released_date < b.released_date)
            return -1;
          return 0;
        });
        break;
      case "mc_user_scoreDesc":
        this.movielist.sort(function(a, b) { 
          if(a.imdb_rating < b.imdb_rating)
            return 1;
          else if(a.imdb_rating > b.imdb_rating)
            return -1;
          return 0;
        });
        break;
      case "mc_user_scoreAsc":
        this.movielist.sort(function(a, b) { 
          if(a.imdb_rating > b.imdb_rating)
            return 1;
          else if(a.imdb_rating < b.imdb_rating)
            return -1;
          return 0;
        });
        break;
      case "mc_num_of_votesDesc":
        this.movielist.sort(function(a, b) { 
          if(a.imdb_votes_integer < b.imdb_votes_integer)
            return 1;
          else if(a.imdb_votes_integer > b.imdb_votes_integer)
            return -1;
          return 0;
        });
        break;
      case "mc_num_of_votesAsc":
        this.movielist.sort(function(a, b) { 
          if(a.imdb_votes_integer > b.imdb_votes_integer)
            return 1;
          else if(a.imdb_votes_integer < b.imdb_votes_integer)
            return -1;
          return 0;
        });
        break;
      case "titleDesc":
        this.movielist.sort(function(a, b) { 
          if(a.title < b.title)
            return 1;
          else if(a.title > b.title)
            return -1;
          return 0;
        });
        break;
      case "titleAsc":
        this.movielist.sort(function(a, b) { 
          if(a.title > b.title)
            return 1;
          else if(a.title < b.title)
            return -1;
          return 0;
        });
        break;        
    }
  }

  clearFilterData() {
    this.titleSearch = '';
    this.actorSearch = '';
    this.orderBySearch = 'release_dateAsc';
    this.yearSearch = 'on';
    this.yearValSearch = '';
    this.minRatingSearch = '';
    this.maxRatingSearch = '';
    this.contentRatingSearch = '';    
    this.movielist = this.movies;
  }
}
