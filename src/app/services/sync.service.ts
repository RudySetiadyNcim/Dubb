import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SyncService {

  constructor(private http: HttpClient) { }

  getSyncMovies(): Observable<any> {
    return this.http.get("http://laravel-env.mzmkyi8phe.ap-southeast-1.elasticbeanstalk.com/api/sync/list");
  }

}
