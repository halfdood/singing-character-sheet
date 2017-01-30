export class CharacterSummary {

    static sort(a: CharacterSummary, b: CharacterSummary): number {
        return a.name.localeCompare(b.name);
    }

    constructor(
        public id: string,
        public name: string) { }

}