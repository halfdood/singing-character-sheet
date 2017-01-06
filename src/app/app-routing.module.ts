import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { SystemSelectComponent } from './system-select/system-select.component';

const appRoutes: Routes = [
  { path: 'system-select', component: SystemSelectComponent },
  { path: '', redirectTo: '/system-select', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
