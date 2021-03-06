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
const representative1 = bananoTest.representative1;
const pendingBlockHash = bananoTest.pendingBlockHash;
const pendingValueRaw = bananoTest.pendingValueRaw;

describe('open', () => {
  it('openAccountFromSeed valid account matches expected', async () => {
    const bananojs = testUtil.getBananojsWithMockApi();
    const expectedResponse= '32ECFCF11DF3B6331A52B456CDC7252282C04230759776FA734CF13432207BE8';
    const actualResponse = await bananojs.openAccountFromSeed(seed0, seedIx, representative1, pendingBlockHash, pendingValueRaw);
    expect(actualResponse).to.deep.equal(expectedResponse);
  });
  it('openAccountFromSeed error', async () => {
    const bananojs = testUtil.getBananojsWithErrorApi();
    const message = 'getGeneratedWork hash:C008B814A7D269A1FA3C6528B19201A24D797912DB9996FF02A1FF356E45552B';
    await testUtil.expectErrorMessage(message, bananojs.openAccountFromSeed, seed0, seedIx, representative1, pendingBlockHash, pendingValueRaw);
  });
  it('openAccountFromSeed processing error', async () => {
    const bananojs = testUtil.getBananojsWithProcessErrorApi();
    const message = '"process block:32ECFCF11DF3B6331A52B456CDC7252282C04230759776FA734CF13432207BE8"';
    await testUtil.expectErrorMessage(message, bananojs.openAccountFromSeed, seed0, seedIx, representative1, pendingBlockHash, pendingValueRaw);
  });

  beforeEach(async () => {
  });

  afterEach(async () => {
    testUtil.deactivate();
  });
});
