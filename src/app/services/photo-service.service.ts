import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: Http) { }

  upload(vehicleId, photo) {
    var formData = new FormData();
    formData.append('file', photo);
    return this.http.post(environment.apiPath + 'vehicles/photos/' + vehicleId, formData);
  }

  getPhoto(vehicleId) {
    return this.http.get(environment.apiPath + 'vehicles/photos/' + vehicleId);
  }

  getPath() {
    return this.http.get(environment.apiPath + 'vehicles/photos/path');
  }
}
