import { SPAPage } from './app.po';

describe('spa App', () => {
  let page: SPAPage;

  beforeEach(() => {
    page = new SPAPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
