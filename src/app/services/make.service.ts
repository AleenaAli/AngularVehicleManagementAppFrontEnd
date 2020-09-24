import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  // tslint:disable-next-line: deprecation
  constructor(private http: Http ) { }
  
  getMakes() {
    return this.http.get(environment.apiPath + 'makes');
  }
}
