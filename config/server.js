module.exports = {
  host: 'localhost',
  port: 1337,
  cron: {
    enabled: false,
  },
  admin: {
    path: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
  },
};
