import { ProgressService, BrowserXhrWithProgress } from './../../services/progress.service';
import { Vehicle } from './../../models/vehicle';
import { PhotoServiceService } from './../../services/photo-service.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Component, OnInit, Inject, ElementRef, ViewChild, Type, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { BrowserXhr } from '@angular/http';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  providers:[
  {provide: BrowserXhr, useClass: BrowserXhrWithProgress},
  ProgressService
  ],
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {
  parameter: number;
  // zone:NgZone;
  vehicle: Vehicle;
  vehicleId: number;
  photos: any;
  feature: string[];
  progress: any;
  path: any;
  @ViewChild('fileInput', null) fileInput: ElementRef;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService,
              private photoService: PhotoServiceService,
              private progressService: ProgressService,
              private vehicleService: VehicleService) {
              route.params.subscribe(p => {
              this.parameter = p.id;
              this.vehicleId = this.parameter;
              console.log('this.parameter', this.parameter);
              if ((isNaN(this.parameter) || this.parameter <= 0)) {
                console.log('ma1');
                router.navigate(['/vehicles']);
                console.log('ma2');
                return;
              }
    });
  }

  ngOnInit() {
    this.photoService.getPhoto(this.parameter).subscribe(photosFromApi => {
      this.photos = photosFromApi.json();
    });

    // this.vehicle.id = this.parameter;
    this.vehicleService.getVehicle(this.parameter).subscribe(v => {
      this.vehicle = v.json();
    },
    err => {
      if (err.status === 404) {
        console.log('error is', err);
        // this.router.navigate(['/vehicles']);
        // return;
      }
    });

    this.photoService.getPath().subscribe(path => {
       this.path = path.text();
       console.log('path', this.path);
      },
     err => {
       if (err) {
         console.log('error is,', err);
       }
    });
  }

  // initialiseFeatures() {
  //   for (let i = 0; i < this.vehicle.features.length; i++) {
  //     for (let l = 0; l < this.vehicleService.features.lenght; l++) {
  //       if (this.vehicle.features[i].id === this.vehicleService.features[l].featureId) {
  //         this.feature.push(this.vehicleService.features[l].featureName);
  //       }
  //       }
  //     }
  //   }


  delete() {
    if (confirm('Are you sure?')) {
      this.vehicleService.deleteVehicle(this.vehicle.id).subscribe(x => this.router.navigate(['/vehicles']));
    }
  }

  uploadPhoto() {
    console.log("ups");
    // tslint:disable-next-line: prefer-const
    let nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    console.log('this.vehicleId23', this.vehicleId);
    // this.progressService.uploadProgress.subscribe(progress => {
    //   console.log("progress",progress);});
      // this.zone.run(()=>{
      //   this.progress=progress; 
      // });
    // },
    // null,
    // ()=>{this.progress=null;});
    this.photoService.upload(this.vehicleId, nativeElement.files[0]).subscribe(x => 
      {
        this.photos.push(x); 
      },
      err=>{
        this.toastrService.error(
          err.text, 'Something unexpected occured',
          // theme: 'bootstrap',
          // showClose: true,
          {timeOut: 5000}
      );
      });
  }
}
