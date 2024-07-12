import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin_layout/admin_layout.component";
import ClientComponent from "./crud/client/client.component";
import clientFormComponent from "./crud/client/client-form/client-form.component";





export const  Admin_routes: Routes=[
    {
        path:'',component:AdminLayoutComponent, children :[
            { path:'client', component:ClientComponent},
            {path:'client/new',component:clientFormComponent}
        ]
    }
]