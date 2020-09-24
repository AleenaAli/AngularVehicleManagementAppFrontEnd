import { FeatureService } from './feature.service';
import { Vehicle } from './../models/vehicle';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError, Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // features:any;
  // // tslint:disable-next-line: deprecation
  // constructor(private http: Http,private featureService:FeatureService) { 
  //   this.featureService.getFeatures().subscribe(data => {
  //     this.features = data.json();
  //   });
  // }

  constructor(private http: Http, private authHttp: AuthHttp){}

  onSubmit(vehicle) {
    return this.http.post(environment.apiPath + 'vehicles', vehicle);
  }

  getAllVehicles(filter) {
    console.log('link', environment.apiPath + 'vehicles/filtered', filter);
    return this.http.post(environment.apiPath + 'vehicles/filtered', filter );
    // return this.http.get(environment.apiPath + 'vehicles'+'?'+this.toQueryString(1002));
  }
  toQueryString(obj) {
    const parts = [];
    // tslint:disable-next-line: forin
    for (const property in obj) {
      const value = obj[property];
      if (value !== null && value !== undefined) {
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }
      return parts.join('&');
    }
  }
  getVehicle(id) {
    console.log("LINK is",environment.apiPath + 'vehicles/' + id);
    return this.http.get(environment.apiPath + 'vehicles/' + id);
  }
  deleteVehicle(id) {
    return this.http.delete(environment.apiPath + 'vehicles/' + id);
  }
}
