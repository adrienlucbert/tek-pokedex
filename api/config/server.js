module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://localhost:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '228c4d09a1bcd3b9e86b13d2e2506b42'),
    },
  },
});
