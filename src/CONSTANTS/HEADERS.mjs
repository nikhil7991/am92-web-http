const HEADERS = {
  REQ: {
    SESSION_ID: 'x-session-id',
    REQUEST_ID: 'x-request-id',
    API_KEY: 'x-api-key',
    AUTH_TOKEN: 'x-auth-token',
    ACCESS_TOKEN: 'x-access-token',
    ENCRYPTION_KEY: 'x-api-encryption-key',
    CLIENT_ID: 'x-client-id'
  },
  RES: {
    AUTH_TOKEN: 'x-auth-token',
    ACCESS_TOKEN: 'x-access-token',
    REFRESH_TOKEN: 'x-refresh-token'
  }
}

export default HEADERS
