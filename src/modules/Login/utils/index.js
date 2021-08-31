export const getAccessToken = cookie => {
  if (cookie) {
    return cookie.replace('access_token=', '').split(';')[0];
  }
  return '';
};
