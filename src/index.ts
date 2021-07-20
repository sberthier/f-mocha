import * as Mocha from 'mocha';
import { setup as _setup } from './setup';

module.exports = function fMochaInterface(suite: Mocha.Suite) {
    Mocha.interfaces.bdd(suite);
    suite.on('pre-require', () => {
        _setup();
    });
};

module.exports.description = 'F-Mocha interface extending default BDD to add fiber support';
module.exports.setup = _setup;

export const setup = _setup;
