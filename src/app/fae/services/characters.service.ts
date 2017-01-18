import { Injectable } from '@angular/core';

import { StoreService } from '../../services/store.service';

const ALL = 'fae_characters_all';

@Injectable()
export class CharactersService {

  constructor(
    private store: StoreService) { }

  all (): string[] {
    return JSON.parse(this.store.get(ALL)) as string[] || [];
  }
}
