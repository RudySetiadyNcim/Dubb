import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/views/movie-list/movie-list.component';
import { MovieDetailComponent } from 'app/views/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: {
      title: 'Movies'
    }
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: {
      title: 'Movies'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
