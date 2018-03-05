import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]  
})
export class MovieDetailComponent implements OnInit {

  public movie = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getMovie(id).subscribe(data => {
      this.movie = data;
    });
  }

}
