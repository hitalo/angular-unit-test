import { AngularUnitTestPage } from './app.po';

describe('angular-unit-test App', () => {
  let page: AngularUnitTestPage;

  beforeEach(() => {
    page = new AngularUnitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
