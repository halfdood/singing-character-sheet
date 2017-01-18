import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaeComponent } from './fae.component';
import { CharacterSelectComponent } from './character-select/character-select.component';
import { CharactersService } from './services/characters.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaeComponent, CharacterSelectComponent],
  providers: [CharactersService]
})
export class FaeModule { }
