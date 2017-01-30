import { Injectable } from '@angular/core';

import { StoreService } from '../../services/store.service';
import { Character } from '../models/character';
import { CharacterSummary } from '../models/character-summary';

const ALL = 'fae_characters_all';

@Injectable()
export class CharactersService {

  constructor(
    private store: StoreService) {
      this.store.set(ALL, JSON.stringify([{id: 'asdf', name: 'char 1'}, { id: 'qwe', name: 'char 2'}]));
  }

  all (): CharacterSummary[] {
    return JSON.parse(this.store.get(ALL)) as CharacterSummary[] || [];
  }

  get (id: string): Character {
    return JSON.parse(this.store.get(id)) as Character || new Character();
  }

  save (character: Character) {
    this.store.set(character.id, JSON.stringify(character));
    const all = this.all();
    if (!all.find((n) => n.id === character.id)) {
      all.push(character.summary);
      this.store.set(ALL, JSON.stringify(all.sort(CharacterSummary.sort)));
    }
  }

}
