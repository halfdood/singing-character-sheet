import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CharacterSelectComponent } from './character-select/character-select.component';
import { CharactersService } from './services/characters.service';
import { FaeComponent } from './fae.component';
import { FaeRoutingModule } from './fae-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FaeRoutingModule
  ],
  declarations: [FaeComponent, CharacterSelectComponent],
  providers: [CharactersService]
})
export class FaeModule { }
