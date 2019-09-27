jest.mock('mysql2/promise', () => require('./mysql2-promise-mock'));

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe('Validity of return value of function', () => {
    test('JSON serializable', async (done) => {
        const res = await (require('../src/')({
            host: 'localhost',
            user: 'user',
            password: 'password'
        }));

        expect(JSON.stringify(res)).toBeTruthy();
        done();
    });
});