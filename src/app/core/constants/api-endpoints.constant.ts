export const API_ENDPOINTS = {
  Auth: {
    Login: { url: '/auth/login', method: 'POST' },
    Profile: { url: '/auth/profile', method: 'GET' },
  },
  User: {
    List: { url: '/users', method: 'GET' },
    Create: { url: '/users', method: 'POST' },
    Update: (id: string) => ({ url: `/users/${id}`, method: 'PUT' }),
  },
} as const;
