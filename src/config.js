module.exports = {
  development: { port: 3000 },
  testing: { port: 4000 },
  production: { port: process.env.PORT || 5000 }
};