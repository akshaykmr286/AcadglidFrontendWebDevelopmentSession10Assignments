import { Routes, RouterModule } from '@angular/router';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';
const appRoutes: Routes = [
    { path: ' ', redirectTo: 'ass1' },
    { path: 'ass1', component: Ass1Component},
    { path: 'ass2', component: Ass2Component},
    { path: 'ass3', component: Ass3Component},
    { path: 'ass4', component: Ass4Component},
     { path: '**', redirectTo: 'ass1' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});