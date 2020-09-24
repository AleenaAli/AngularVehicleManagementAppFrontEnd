import { ErrorHandler, Inject, NgZone, isDevMode } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as Raven from 'raven-js';

export class VegaErrorHandler implements ErrorHandler {

    constructor(  @Inject(ToastrService) private toastrService: ToastrService, @Inject(NgZone) private ngZone: NgZone) { }
    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastrService.error(
                error, 'Something unexpected occured',
                // theme: 'bootstrap',
                // showClose: true,
                {timeOut: 5000}
            );
        });
        if (!isDevMode) {
            Raven.captureException(error.originalError || error);
        } else {
            throw error;
        }
        // this.toastrService.error(
        //     'Error', 'Something unexpected occured',
        //     // theme: 'bootstrap',
        //     // showClose: true,
        //     {timeOut: 5000}
        // );
        // throw new Error('Error');
    }
}
