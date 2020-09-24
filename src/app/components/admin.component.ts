import { componentFactoryName } from "@angular/compiler";
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'selector-name',
    template:'<chart type="pie" [data]="data"></chart>'
})

export class AdminComponent implements OnInit{
    
    data={
        labels:['BMW','Mazda','Audi'],
        datatsets:[
            {
                data:[5,3,1],
                backgroundColor:[
                    "#ff6384","#36a2eb","#ffce56"
                ]
            }
        ]
    }
    constructor(){}

    ngOnInit(){}
}