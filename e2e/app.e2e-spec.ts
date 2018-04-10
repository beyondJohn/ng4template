import { RxjsPage } from './app.po';

describe('rxjs App', () => {
  let page: RxjsPage;

  beforeEach(() => {
    page = new RxjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
