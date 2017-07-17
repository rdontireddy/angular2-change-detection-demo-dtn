import { Angular2ChangeDetectionDemoDtnPage } from './app.po';

describe('angular2-change-detection-demo-dtn App', () => {
  let page: Angular2ChangeDetectionDemoDtnPage;

  beforeEach(() => {
    page = new Angular2ChangeDetectionDemoDtnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
