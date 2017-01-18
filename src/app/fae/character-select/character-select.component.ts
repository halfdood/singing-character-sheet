import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {
  characters: string[];

  constructor(
    private service: CharactersService) { }

  ngOnInit() {
    this.characters = this.service.all();
  }

}
