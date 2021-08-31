import api from './index';

describe('login api', () => {
  it('logInRequest should return correct config', () => {
    const username = 'James';
    const password = '123456';

    const expectedResult = {
      url: 'login',
      method: 'patch',
      data: {
        password,
        username,
      },
    };

    expect(api.logInRequest({ password, username })).toStrictEqual(expectedResult);
  });
});
