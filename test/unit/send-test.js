'use strict';

// libraries
const chai = require('chai');

// modules
const assert = chai.assert;
const expect = chai.expect;

const bananoTest = require('./banano-test.json');

const testUtil = require('../util/test-util.js');

const seed0 = bananoTest.seed0;
const seedIx = bananoTest.seedIx;
const bananoAccount = bananoTest.account;

describe('send', () => {
  it('sendAmountToAccount with blank previous', async () => {
    const expectedResponse = undefined;
    const bananojs = testUtil.getBananojsWithMockApi();
    const actualResponse = await bananojs.sendAmountToAccountWithRepresentativeAndPrevious(
        seed0, seedIx, bananoAccount, 1,
        '000D1BAEC8EC208142C99059B393051BAC8380F9B5A2E6B2489A277D81789F3F',
        '');
    expect(actualResponse).to.deep.equal(expectedResponse);
  });
  it('sendAmountToAccount valid account matches expected', (done) => {
    const bananojs = testUtil.getBananojsWithMockApi();
    const successCallback = () => {
      done();
    };
    const failureCallback = (error) => {
      throw error;
    };
    bananojs.sendAmountToAccount(seed0, seedIx, bananoAccount, 1, successCallback, failureCallback);
  });
  it('sendAmountToAccount error', async () => {
    const bananojs = testUtil.getBananojsWithErrorApi();
    const successCallback = () => {
      throw new Error('successCallback should not be called');
    };
    const failureCallback = (error) => {
      throw error;
    };
    const message = 'Error: getAccountInfo account:ban_3i1aq1cchnmbn9x5rsbap8b15akfh7wj7pwskuzi7ahz8oq6cobd99d4r3b7';
    await testUtil.expectErrorMessage(message, bananojs.sendAmountToAccount, seed0, seedIx, bananoAccount, 1, successCallback, failureCallback);
  });
  it('sendAmountToAccount processing error', async () => {
    const bananojs = testUtil.getBananojsWithProcessErrorApi();
    const successCallback = () => {
      throw new Error('successCallback should not be called');
    };
    const failureCallback = (error) => {
      throw error;
    };
    const message = 'process block:9B4B70A4BE903A07C549D3AD16EDA268D61F572210B1E63B93F6827CB4944CF6';
    await testUtil.expectErrorMessage(message, bananojs.sendAmountToAccount, seed0, seedIx, bananoAccount, 1, successCallback, failureCallback);
  });
  it('sendAmountToAccount low balance error', async () => {
    const bananojs = testUtil.getBananojsWithMockApi();
    const successCallback = () => {
      throw new Error('successCallback should not be called');
    };
    const failureCallback = (error) => {
      throw error;
    };
    const message = 'Error: The server\'s account balance of 10 bananos is too small, cannot withdraw 11 bananos.';
    const amountRaw = bananojs.getRawStrFromBananoStr('11');
    await testUtil.expectErrorMessage(message, bananojs.sendAmountToAccount, seed0, seedIx, bananoAccount, amountRaw, successCallback, failureCallback);
  });
  it('sendAmountToAccount undefined account info balance error', async () => {
    const bananojs = testUtil.getBananojsWithAccountInfoBalanceErrorApi();
    const successCallback = () => {
      throw new Error('successCallback should not be called');
    };
    const failureCallback = (error) => {
      throw error;
    };
    const message = 'Error: The server\'s account balance cannot be retrieved, please try again.';
    const amountRaw = bananojs.getRawStrFromBananoStr('11');
    await testUtil.expectErrorMessage(message, bananojs.sendAmountToAccount, seed0, seedIx, bananoAccount, amountRaw, successCallback, failureCallback);
  });
  it('sendAmountToAccount undefined account info error', async () => {
    const bananojs = testUtil.getBananojsWithAccountInfoErrorApi();
    const successCallback = () => {
      throw new Error('successCallback should not be called');
    };
    const failureCallback = (error) => {
      throw error;
    };
    const message = 'Error: The server\'s account info cannot be retrieved, please try again.';
    const amountRaw = bananojs.getRawStrFromBananoStr('11');
    await testUtil.expectErrorMessage(message, bananojs.sendAmountToAccount, seed0, seedIx, bananoAccount, amountRaw, successCallback, failureCallback);
  });

  beforeEach(async () => {
  });

  afterEach(async () => {
    testUtil.deactivate();
  });
});
