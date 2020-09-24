import { Injectable, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Browser } from 'protractor';
import { BrowserXhr } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private uploadProgress: Subject<any> ;
  startTracking() {
    if(this.uploadProgress)
     { 
       this.uploadProgress = new Subject();
       return this.uploadProgress;
     }
  }
  notifyProgress(progress) {
    if(this.uploadProgress)
      this.uploadProgress.next(progress);
  }
  endTracking(){
    if(this.uploadProgress)
      this.uploadProgress.complete();
  }
  constructor() { }
}

@Injectable()
export class BrowserXhrWithProgress extends BrowserXhr {

  constructor(private service: ProgressService) {
    super();
  }

  build(): XMLHttpRequest {
    let xhr: XMLHttpRequest = super.build();
    xhr.upload.onprogress = (event) => {
      this.service.notifyProgress(this.createProgress(event));
    };
    return xhr;
  }

  private createProgress(event) {
    return {
      total: event.total,
      percentage: Math.round(event.loaded / event.total * 100)
    };
  }
}
