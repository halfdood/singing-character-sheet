import { SingingCharacterSheetPage } from './app.po';

describe('singing-character-sheet App', function() {
  let page: SingingCharacterSheetPage;

  beforeEach(() => {
    page = new SingingCharacterSheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
