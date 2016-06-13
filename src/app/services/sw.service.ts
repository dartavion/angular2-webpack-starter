import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SW {
  constructor(private http: Http) {

  }

  get(path: string) {
    return this.makeRequest(path);
  }

  private makeRequest(path: string) {

    let url = `https://swapi.co/api/${ path }`;
    return this.http.get(url)
      .map((res) => res.json());
  }
}
