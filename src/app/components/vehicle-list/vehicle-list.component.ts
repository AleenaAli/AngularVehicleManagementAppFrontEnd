import { Filter } from './../../models/filter';
import { MakeService } from './../../services/make.service';
import { Vehicle, KeyValuePair } from './../../models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  loopArray: any[];

  constructor(private vehicleService: VehicleService, private makeService: MakeService) { }

	totalPages= 0;
	currentPage = 1;
  vehicles: Vehicle[];
  makes: any[];
  filter: Filter = new Filter();
  columns = [
    {title: 'Id', key: 'id', isSortable: true},
    {title: 'Model', key: 'model', isSortable: true},
    {title: 'Make', key: 'make', isSortable: true},
    {title: 'ContactName', key: 'contactName', isSortable: true},
    {}
  ];
  totalItems = 16;


  ngOnInit() {
    this.makeService.getMakes().subscribe(data => {
      this.makes = data.json();
    });
    // this.setPagination();
    this.populateVehicles();
  }

  setPagination() {
    this.totalPages = Math.ceil(this.totalItems / this.filter.pageSize);
    this.loopArray = new Array(this.totalPages);
  }
  populateVehicles() {
    console.log('filter', this.filter);
    this.vehicleService.getAllVehicles(this.filter).subscribe(data => {
      console.log('lalala', this.vehicles);
      this.vehicles = data.json();
      console.log('data', this.vehicles);
      // this.vehiclesForFilter = data.json();

    });
  }

  onFilterChange() {
    this.populateVehicles();
  }

  onSort(col) {
    if (this.filter.sortBy === col) {
      this.filter.isSortAscending = !this.filter.isSortAscending;
    } else {
      this.filter.sortBy = col;
      this.filter.isSortAscending = true;
    }
    this.populateVehicles();
  }

  onButtonReset() {
    // this.filter.makeId=null;
    this.filter.makeId = null;
    this.onFilterChange();
  }

}
