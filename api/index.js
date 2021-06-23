const server = require('./src/app.js');
const { conn, Recipe, Diet } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    
    Recipe.create({
      title: 'Arepa de Huevo',
      image: 'https://www.och-lco.ca/wp-content/uploads/2015/07/unavailable-image.jpg',
      summary: 'Esta es una deliciosa receta de la costa caribeña de Colombia. Estas populares arepas de maíz a menudo se preparan en los pequeños mercados callejeros y verá una larga cola de clientes esperando para comprarlas.',
      score: 85,
      healthScore: 55,
      instructions: 'En un recipiente mezclar la harina la sal. Vertir el agua caliente lentamente y revolver con una cuchara a medida que se va agregando mas agua. Mezclar muy bien hasta que conforme una masa consistente, dejar reposar por 10 minutos o hasta que sea posible manipularla. Tomar una pequeña porcion y colocarla en una superficie plana cubierta con una bolsa plastica o vinilo. Dejar la masa dentro de la bolsa y luego usar un rodillo para aplanarla. Con un cortador de galletas u otro cortador hacer circulos del tamaño deseado. Precalentar el aceite y freirlas a fuego medio. Cuando esten un poco doradas sacarlas a una superficie segura. Con un cuchillo hacer un corte en uno le sus lados de mas o menos 4 o 5 centimetros, haciendo espacio para introducir el huevo. Se coloca el huevo en un pocillo, se agrega sal y pimienta al gusto y luego se vierte dentro de la arepa. Se asegura la arepa con un poco mas de masa y luego se frie otra vez. Cuando este dorado por un lado darle la vuelta. Sacar la arepa a una plato con papel de cocina para que absorva el exceso de aceite. Servir caliente.',
    });
    
    Recipe.create({
      title: 'Ajiaco',
      image: 'https://www.och-lco.ca/wp-content/uploads/2015/07/unavailable-image.jpg',
      summary: 'Esta sopa suele ser espesa y rica, y es una comida principal. Tradicionalmente se añaden tortas de harina de maíz o arepas a muchas comidas, y en este plato aguacate, arroz y alcaparras.',
      score: 95,
      healthScore: 78,
      instructions: 'En una olla suficientemente grande se vierte el agua y al leche y se colocan las pechugas y el gajo de cebolla entero, y se pone a fuego medio alto. Luego se añaden el cubo de caldo de gallina, las hojas de laurel, sal, comino y pimienta al gusto. Se añaden las mazorcas, las papas rojas y se dejan cocinar hasta que ablanden. Luego se adiciona las papas criollas (o papas amarillas), y se dejan cocinar hasta que espese. Se saca el pollo aparte para poder desmenuzarlo en trozos medianos. Se baja la temperatura a fuego medio, y se le agrega de nuevo el pollo. Se agrega un manojo de guascas (o se puede sustituir por una cucharada de orégano y se retiran antes de servir. Se retira la olla del fuego y se sirve el ajiaco caliente.',
    });

    Recipe.create({
      title: 'Agua de Panela',
      image: 'https://www.och-lco.ca/wp-content/uploads/2015/07/unavailable-image.jpg',
      summary: 'Es una bebida popular en Colombia. Puedes tomarlo frío o caliente. La melaza natural de este azúcar le da un rico sabor a melaza.',
      score: 95,
      healthScore: 95,
      instructions: 'En una olla se coloca el agua, canela y la panela a hervir hasta que la panela o azúcar se derrita completamente.Se retiran las astillas de canela y se sirve caliente o fría. Se puede agregar el limón al servir.',
    });

  });
});
