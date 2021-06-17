const server = require('./src/app.js');
const { conn, Recipe, Diet } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    Recipe.create({
      name: 'Arepa de Huevo',
      summary: 'La arepa más rica del mundo'
    });
  });

});
