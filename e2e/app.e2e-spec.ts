import { NgSpotifyPage } from './app.po';

describe('ng-spotify App', () => {
  let page: NgSpotifyPage;

  beforeEach(() => {
    page = new NgSpotifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
