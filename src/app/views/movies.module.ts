import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MovieListComponent } from 'app/views/movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ MovieListComponent, MovieDetailComponent ]
})
export class MovieModule { }
