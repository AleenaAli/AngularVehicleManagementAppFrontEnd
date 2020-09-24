import { VehicleFormComponent } from './../components/vehicle-form/vehicle-form.component';
import { KeyValue } from '@angular/common';


export interface KeyValuePair {
    id: number;
    value: string;
}
export interface Model {
    id: number;
    value: string;
    makeID: number;
}

export interface Contact {
    contactName: string;
    contactEmail: string;
    contactNumber: string;
}
export interface Vehicle {
    id: number;
    modelId: number;
    model: Model ;
    isRegistered: boolean;
    features: KeyValuePair[];
    contact: Contact;
    lastUpdate: string;

}
// export interface SaveVehicle {
//     id: number;
//     modelId: number;
//     makeid: number;
//     isRegistered: boolean;
//     features: number[];
//     contact: Contact;
// }

