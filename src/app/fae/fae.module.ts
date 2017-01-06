import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaeComponent } from './fae.component';
import { CharacterSelectComponent } from './character-select/character-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaeComponent, CharacterSelectComponent]
})
export class FaeModule { }
