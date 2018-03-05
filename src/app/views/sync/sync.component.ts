import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'app/services/sync.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MovieService } from 'app/services/movie.service';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss'],
  providers: [MovieService, SyncService]  
})
export class SyncComponent implements OnInit {

  modalRef: BsModalRef;
  movies: Array<any>;
  is_adding: boolean;
  imdb_id: '';

  constructor(
    private syncService: SyncService,
    private movieService: MovieService,
    private modalService: BsModalService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.syncService.getSyncMovies().subscribe(data => {
      this.movies = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.is_adding = false;

  }

  addMovie() {
    this.is_adding = true;
    this.movieService.addMovie(this.imdb_id)
    .subscribe(res => {
      this.getMovies();
      this.modalRef.hide();
      this.is_adding = false;
    }, (err) => {
      console.table(err);
      this.is_adding = false;
    })
  }

  updateMovie(imdb_id) {
    this.movieService.addMovie(imdb_id)
    .subscribe(res => {
      this.getMovies();
    }, (err) => {
      console.table(err);
    });
  }

  deleteMovie(imdb_id) {
    this.movieService.deleteMovie(imdb_id)
    .subscribe(res => {
      this.getMovies();
    }, (err) => {
      console.table(err);
    });
  }

  updateAllMovies() {
    for(let i = 0; i < this.movies.length; i++) {
      this.updateMovie(this.movies[i].imdb_id);
    }
  }

}
