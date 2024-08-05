import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin_layout/admin_layout.component";
import ClientComponent from "./crud/client/client.component";
import clientFormComponent from "./crud/client/client-form/client-form.component";
import { AdminMainComponent } from "./admin-main/admin-main.component";
import cargoComponent from "./crud/cargo/cargo.component";
import cargoFormComponent from "./crud/cargo/cargo-form/cargo-form.component";
import EditComponentClient from "./crud/client/edit/edit.component";
import EditComponentCargo from "./crud/cargo/edit/edit.component";
import vehicleComponent from "./crud/vehicle/vehicle.component";
import vehicleFormComponent from "./crud/vehicle/vehicle-form/vehicle-form.component";
import EditComponentVehicle from "./crud/vehicle/edit/edit.component";
import DriverComponent from "./crud/driver/driver.component";
import DriverFormComponent from "./crud/driver/driver-form/driver-form.component";
import EditComponentDriver from "./crud/driver/edit/edit.component";





export const  Admin_routes: Routes=[
    {
        path:'',component:AdminLayoutComponent, children :[
            {path:'', component:AdminMainComponent},
            { path:'client', component:ClientComponent},
            {path:'client/new',component:clientFormComponent},
            {path:'client/update:id',component:EditComponentClient},
            { path: 'cargo', component: cargoComponent },
            { path: 'cargo/new', component: cargoFormComponent },
            { path: 'cargo/update/:id', component:EditComponentCargo },

            { path: 'vehicle', component: vehicleComponent },
            { path: 'vehicle/new', component: vehicleFormComponent },
            { path: 'vehicle/update/:id', component: EditComponentVehicle},

            { path: 'driver', component: DriverComponent },
            { path: 'driver/new', component: DriverFormComponent },
            { path: 'driver/update/:id', component: EditComponentDriver },


        ]
    }
]
