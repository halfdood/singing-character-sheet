import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  constructor() { }

  get (key: string): string {
    return localStorage.getItem(key);
  }

  set (key: string, data: string) {
    localStorage.setItem(key, data);
  }
}
