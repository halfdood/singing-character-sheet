import { Injectable } from '@angular/core';

import { StoreService } from '../../services/store.service';

@Injectable()
export class CharactersService {

  constructor(
    private store: StoreService) { }

  all (): string[] {
    return [];
  }
}
