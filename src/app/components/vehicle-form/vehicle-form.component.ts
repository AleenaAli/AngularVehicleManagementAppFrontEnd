import { throwError, Observable, forkJoin } from 'rxjs';
import { element } from 'protractor';
import { FeatureService } from './../../services/feature.service';
import { MakeService } from './../../services/make.service';
import { Component, OnInit, Inject } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  modelId;
  Contact: any = {};
  vehicle: any = {
    model: {},
    features: [],
    contact: {}
  };
  parameter;
  makeSelected: any;
  checked: boolean;
  features: any[];
  constructor(private makeService: MakeService,
              private featureService: FeatureService,
              private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) {
                route.params.subscribe(p => {
                  this.parameter = p.id;
                });
              }

  ngOnInit() {
    if (this.parameter === 'new' || !this.parameter) {
      this.makeService.getMakes().subscribe(makes => {
        this.makes = makes.json();
      });

      this.featureService.getFeatures().subscribe(data => {
        this.features = data.json();
      });
    } else {
      this.vehicle.id = parseInt(this.parameter);
      this.vehicleService.getVehicle(this.vehicle.id).subscribe(v => {
        this.setvehicle(v);
      });
      this.featureService.getFeatures().subscribe(data => {
        this.features = data.json();
      });
    }
  }

  setvehicle(vehicle) {
    console.log('vehicle', vehicle);
    this.vehicle.id = vehicle.id;
    this.vehicle.model = vehicle.model;
    this.vehicle.features = vehicle.features;
    this.vehicle.contact = vehicle.contact;
  }

  onMakeChange() {
    // tslint:disable-next-line: radix
    const selectedMakes = this.makes.find(m => m.id === parseInt(this.makeSelected));
    this.models = selectedMakes.models;

    // this.models = selectedMakes ? selectedMakes.models : [];
  }

  onModelChange() {
    // tslint:disable-next-line: radix
    const tempModel = this.models.find(m => m.id === (this.vehicle.modelId));
    this.vehicle.model = tempModel;
  }
  onFeatureToggle(feature, $event) {

    // if (this.checked === false ) {
    //   this.checked=true;
    // }
    // else if (this.checked === true) {

    // }
    if ($event.target.checked) {
      // tslint:disable-next-line: radix
      const tempFeature = this.features.find( f => f.featureId === parseInt(feature.featureId));
      // this.vehicle.vehicleFeature.push(f.featureName);
      this.vehicle.features.push(tempFeature);
    } else {
      const index = this.vehicle.features.indexOf(feature);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    console.log('On submit');
    this.vehicleService.onSubmit(this.vehicle).subscribe(result => {
      console.log('result', result);
      this.toastrService.success(
       'Success','Data was successfully saved',
       {timeOut:5000}
      );
    });

  }

}
