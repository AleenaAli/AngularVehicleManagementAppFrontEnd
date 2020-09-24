import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  getFeatures() {
    return this.http.get(environment.apiPath + 'features');
  }
}
