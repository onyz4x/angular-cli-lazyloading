import { AngularCliLazyloadingPage } from './app.po';

describe('angular-cli-lazyloading App', () => {
  let page: AngularCliLazyloadingPage;

  beforeEach(() => {
    page = new AngularCliLazyloadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
