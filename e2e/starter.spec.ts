import { device, element, by, expect } from 'detox';

describe('Mobile', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should display welcome screen', async () => {
    expect(element(by.id('welcome'))).toBeVisible;
  });

  it('should tap on a reset password Button', async () => {
    await element(by.text('Reset Password')).tap();
  });

  it('should display Reset passwword index screen', async () => {
    expect(element(by.text('Reset Password index screen'))).toBeVisible;
  });
});
