import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterSelectComponent } from './character-select/character-select.component';
import { FaeComponent } from './fae.component';

const faeRoutes: Routes = [
    { path: 'fae', component: CharacterSelectComponent, pathMatch: 'full' },
    { path: 'fae/:name', component: FaeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(faeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FaeRoutingModule { }
