import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/movies");
  }

  getMovie(id: string): Observable<any> {
    return this.http.get("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/movies/" + id);
  }

  getNewMovies(): Observable<any> {
    return this.http.get("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/new-movies");
  }

  getTopMovies(): Observable<any> {
    return this.http.get("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/top-movies");
  }

  addMovie(imdb_id: string) {
    return this.http.post("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/movies/" + imdb_id, {});
  }

  deleteMovie(imdb_id: string) {
    return this.http.delete("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/movies/" + imdb_id);
  }

}
