import { getAccessToken } from './index';

describe('function getAccessToken', () => {
  it("should return empty string when don't have cookie", () => {
    const cookie = '';
    expect(getAccessToken(cookie)).toEqual('');
  });

  it('should return access token when have cookie', () => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const cookie = `access_token=${accessToken}; Max-Age=86400; HttpOnly`;

    expect(getAccessToken(cookie)).toEqual(accessToken);
  });
});
