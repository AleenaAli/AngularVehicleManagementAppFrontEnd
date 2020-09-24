// import { environment } from './../../../environments/environment.prod';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  public foreCasts: WeatherForecast[];

  constructor(http: Http) {
    http.get(environment.apiPath+'SampleData/WeatherForecasts')
    .subscribe(result => {
      console.log('yeelo', result, 'result.type=', result.type); // this.foreCasts = result.json()
      this.foreCasts = result.json();
    });
   }


  ngOnInit() {
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}
