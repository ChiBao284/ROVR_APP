export default {
  logInRequest: ({ username, password }) => ({
    url: 'login',
    method: 'patch',
    data: {
      username,
      password,
    },
  }),
  logOutRequest: () => ({
    url: 'logout',
    method: 'delete',
  }),
};
