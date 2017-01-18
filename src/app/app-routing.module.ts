import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaeComponent } from './fae/fae.component';
import { CharacterSelectComponent } from './fae/character-select/character-select.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SystemSelectComponent } from './system-select/system-select.component';

const appRoutes: Routes = [
  { path: 'fae',
    children: [
      { path: 'characters', component: CharacterSelectComponent },
      { path: ':name', component: FaeComponent },
      { path: '', redirectTo: '/fae/characters', pathMatch: 'full' }
    ]
  },
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
