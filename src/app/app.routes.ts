import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

export const routes: Routes = [


    //
    {
        path:'', 
        loadChildren:()=>import ('./admin/admin.routes').then(m=>m.Admin_routes)
    }











/*

    { path: 'login', loadComponent: () => import("./authentication/login/login.component")},
    // Puedes agregar más rutas aquí si es necesario
    { path: '', component: MainComponent},
    { path: 'internal', loadComponent: () => import("./work/dashboard/dashboard.component") },
    // rutas de la clase driver en angular 
    
    {
        path:'driver',
        loadComponent:()=>import('./components/driver/driver.component')
    },
    {
        path:'driver/new',
        loadComponent:()=>import('./components/driver/driver-form/driver-form.component')
    },
    {
        path:'driver/update/:id',
        loadComponent:()=>import('./components/driver/edit/edit.component')
    },
//   rutas para la clase cliente en angular
    {
        path:'client',
        loadComponent:()=>import('./components/client/client.component')
    },
    {
        path:'client/new',
        loadComponent:()=>import('./components/client/client-form/client-form.component')
    },
    {
        path:'client/update/:id',
        loadComponent:()=>import('./components/client/edit/edit.component')
    },
    // rutas para vehiculos 
    {
        path:'vehicle',
        loadComponent:()=>import('./components/vehicle/vehicle.component')
    },
    {
        path:'vehicle/new',
        loadComponent:()=>import('./components/vehicle/vehicle-form/vehicle-form.component')
    },
    {
        path:'vehicle/update/:id',
        loadComponent:()=>import('./components/vehicle/edit/edit.component')
    },
    //  rutas para paquetes
    {
        path:'cargo',
        loadComponent:()=>import('./components/cargo/cargo.component')
    },
    {
        path:'cargo/new',
        loadComponent:()=>import('./components/cargo/cargo-form/cargo-form.component')
    },
    {
        path:'cargo/update/:id',
        loadComponent:()=>import('./components/cargo/edit/edit.component')
    },
    
  // ruta de envios
    {
    path:'delivery',
    loadComponent:()=>import('./components/delivery/delivery/delivery.component')
    },
    {
        path:'tracking',
        loadComponent:()=>import('./components/tracking/tracking.component')
    },
    {
        path:'listd',
        loadComponent:()=>import('./components/delivery/lit/lit.component')
    },

*/

];
