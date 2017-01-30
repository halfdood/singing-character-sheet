import { CharacterSummary } from './character-summary';

export class Character {

    id: string;
    name: string;
    highConcept: string;
    trouble: string;
    aspects: string[];

    constructor() { }

    get summary() {
        return new CharacterSummary(this.id, this.name);
    }
}