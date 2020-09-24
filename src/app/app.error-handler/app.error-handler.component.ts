import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-app.error-handler',
  templateUrl: './app.error-handler.component.html',
  styleUrls: ['./app.error-handler.component.css']
})
export class AppErrorHandlerComponent implements ErrorHandler {

  handleError(error: any): void {
    throw new Error('Error');
  }


}
