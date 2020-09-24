import { BrowserXhrWithProgress, ProgressService } from './services/progress.service';
import { PhotoServiceService } from './services/photo-service.service';
import { FeatureService } from './services/feature.service';
import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable, isDevMode } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule, BrowserXhr} from '@angular/http';
import { MakeService } from './services/make.service';
import { FormsModule } from '@angular/forms';
import { VehicleService } from './services/vehicle.service';
import { VegaErrorHandler } from './vega-error-handler';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PaginationComponentComponent } from './components/shared/pagination-component/pagination-component.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin.component';
import { AdminAuthGuard } from './services/admin.auth.guard.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {ChartModule} from 'angular2-chartjs';

// Raven.config('https://sentry.io/api/2385136/security/?sentry_key=efee408a8fbe42e1b78c16522828d5bb').install();

// Sentry.init({
//   dsn: 'https://efee408a8fbe42e1b78c16522828d5bb@sentry.io/2385136',
//   integrations: [
//     new Integrations.Angular(),
//   ],
// });

// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   constructor() {}
//   handleError(error) {
//     if (isDevMode) {
//       const eventId = Sentry.captureException(error.originalError || error);
//       Sentry.showReportDialog({ eventId });
//     } else {
//       console.log(error);
//     }
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavBarComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    VehicleListComponent,
    PaginationComponentComponent,
    JwPaginationComponent, ViewVehicleComponent,
    AdminComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: VegaErrorHandler},
    // tslint:disable-next-line: deprecation
    HttpClientModule,
    MakeService,
    FeatureService,
    AdminAuthGuard,
    AUTH_PROVIDERS,
    VehicleService,
    PhotoServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
