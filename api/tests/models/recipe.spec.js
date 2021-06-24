const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Recipe model', () => {
  
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  
  describe('Validators', () => {

    beforeEach(() => Recipe.sync({ force: true }));
    
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title', () => {
        Recipe.create({ title: 'Arepa de huevo' });
      });
    });
  });
});
