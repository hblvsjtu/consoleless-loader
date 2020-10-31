/**
 * index.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

import add from '../src/lib/utils';

const assert = require('assert');

/* eslint-disable */
describe('#utils.js', () => {
    describe('#sum()', () => {
        it('add(0) should return 1', () => {
            assert.strictEqual(add(0), 1);
        });
    });
});
