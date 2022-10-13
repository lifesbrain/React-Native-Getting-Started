const verifyparse = require('./verifyparse')

test('Should return true if email is acceptable, false if not', () => {
    expect(verifyparse.email('yes@domain.yup').toBe(true))
});