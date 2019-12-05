
jest.mock('mysql2/promise', () => require('./mysql2-promise-mock'));

const smf = require('../src/');

describe('mysql-state-module', () => {
    it('should reject if user data is not correct', async (done) => {
        await expect(smf()).rejects.toThrow();
        done();
    });

    it('should resolve if user data is correct', async (done) => {
        await expect(await (smf({ host: 'localhost', user: 'user', password: 'password' })));
        done();
    });

    describe('parsing results', () => {
        let results;

        beforeAll(async done => {
            results = await smf({ host: 'localhost', user: 'user', password: 'password' });
            done();
        });

        it('should not parse an unparsable string', () => {
            expect(results.a).toBe('hello');
            expect(typeof results.a).toBe('string');
        });

        it('should parse "YES" and "ON" as true', () => {
            expect(results.b).toBe(true);
            expect(results.d).toBe(true);
        });

        it('should parse "NO" and "OFF" as false', () => {
            expect(results.c).toBe(false);
            expect(results.e).toBe(false);
        });

        it('should parse numerical values as number', () => {
            expect(typeof results.f).toBe('number');
            expect(typeof results.g).toBe('number');
        });
    });
});
