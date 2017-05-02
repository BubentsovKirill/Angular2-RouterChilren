import { AngularLesson4Page } from './app.po';

describe('angular-lesson4 App', function() {
  let page: AngularLesson4Page;

  beforeEach(() => {
    page = new AngularLesson4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
