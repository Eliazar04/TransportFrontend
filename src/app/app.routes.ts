import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';






export const routes: Routes = [
   
   

    //{path:'',loadComponent:()=>import("./main/main/main.component")},


   
    {path:'dl',loadComponent:()=>import("./main/listad/listad.component")},
    { path: 'login', loadComponent: () => import("./authentication/login/login.component")},
    // Puedes agregar más rutas aquí si es necesario
    { path: '', component: MainComponent},
    { path: 'internal', loadComponent: () => import("./work/dashboard/dashboard.component") },
    // rutas de la clase driver en angular 
    
    {
        path:'driver',
        loadComponent:()=>import('./admin/crud/driver/driver.component')
    },
    {
        path:'driver/new',
        loadComponent:()=>import('./admin/crud/driver/driver-form/driver-form.component')
    },
    {
        path:'driver/update/:id',
        loadComponent:()=>import('./admin/crud/driver/edit/edit.component')
    },
//   rutas para la clase cliente en angular
    {
        path:'client',
        loadComponent:()=>import('./admin/crud/client/client.component')
    },
    {
        path:'client/new',
        loadComponent:()=>import('./admin/crud/client/client-form/client-form.component')
    },
    {
        path:'client/update/:id',
        loadComponent:()=>import('./admin/crud/client/edit/edit.component')
    },
    // rutas para vehiculos 
    {
        path:'vehicle',
        loadComponent:()=>import('./admin/crud/vehicle/vehicle.component')
    },
    {
        path:'vehicle/new',
        loadComponent:()=>import('./admin/crud/vehicle/vehicle-form/vehicle-form.component')
    },
    {
        path:'vehicle/update/:id',
        loadComponent:()=>import('./admin/crud/vehicle/edit/edit.component')
    },
    //  rutas para paquetes
    {
        path:'cargo',
        loadComponent:()=>import('./admin/crud/cargo/cargo.component')
    },
    {
        path:'cargo/new',
        loadComponent:()=>import('./admin/crud/cargo/cargo-form/cargo-form.component')
    },
    {
        path:'cargo/update/:id',
        loadComponent:()=>import('./admin/crud/cargo/edit/edit.component')
    },
    
  // ruta de envios
    {
    path:'delivery',
    loadComponent:()=>import('./admin/delivery/delivery/delivery.component')
    },
    {
        path:'tracking',
        loadComponent:()=>import('./admin/tracking/tracking.component')
    },
    
    

];
