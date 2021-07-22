require('dotenv').config();
const server = require('./src/app.js');
const { conn, Recipe, Diet } = require('./src/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console

    /*Recipe.create({
      title: 'Asado Argentino',
      image:
        'https://www.tangol.com/blog/Fotos/Notas/lo-que-tenes-que-saber-de-un-tipico-asado-argentino_1049_202011260625490.PNG',
      summary:
        'Básicamente, se trata de colocar diversos trozos de carne expuestos al calor del fuego. En la práctica, existen diferentes técnicas para cocinar bajo este formato. Los gauchos que ocupaban las llanuras de Argentina se especializaron en preparar carnes en asadores de hierro.',
      score: 100,
      healthScore: 80,
      instructions:
        'Encender el fuego mediante leña o carbón. Colocar las rejillas del asador. Lo ideal es ir cocinando las diferentes piezas de carne según su tiempo de cocinado, así como el mantenimiento de la textura de las piezas, una vez cocinadas. Comenzaremos cocinando los filetes de ternera, en torno a 3 minutos por cada lado, sin que quede demasiado hecho. Después haremos las chuletas de cerdo y de cordero. En este caso se suelen cocinar un poco más, unos cuatro minutos, pero sin pasarse. Luego pondremos poco a poco las demás piezas, salchichas, morcilla, chorizo, alas de pollo, etc. En torno a 6-7 minutos de cocción por cada lado, será lo ideal. Es interesante espolvorear nuestro asado argentino con una porción generosa de sal gorda.',
    });

    Recipe.create({
      title: 'Locro',
      image: 'https://okdiario.com/img/2019/08/08/locro-argentino.jpg',
      summary:
        'El locro argentino es un plato auténtico que tiene todo lo necesario para convertirse en un básico de nuestra cocina. Esta combinación de cereales, carnes y verduras se parece a nuestro cocido de toda la vida, es igual de contundente y de delicioso. En esos días en los que nos apetece un plato contundente, podemos experimentar con un plato típico de la cordillera Andina. Haga o no frío, coger la cuchara y descubrir nuevos sabores, texturas y acabados es siempre un placer.',
      score: 95,
      healthScore: 90,
      instructions:
        'La base principal de esta receta son las carnes, con la grasa de la panceta vamos a conseguir un fondo de los que no se olvidan. Cortamos en daditos toda la carne. Empezaremos a dorarla en la cazuela en la que vamos a cocinar esta delicia contundente. Mientras la panceta va cogiendo color, nos ponemos manos a la obra con las verduras, las pelamos y troceamos. Cuando la carne ya haya soltado un poco de grasa, será el momento de incorporar las verduras. Ellas serán la base de un guiso impresionante. Empezaremos por las cebollas y seguiremos con el maíz o los pimientos que necesitan menos tiempos de cocción. Salpimentamos la carne y la incorporamos en taquitos a este guiso. Dejaremos que vaya cogiendo color y nos aporte su mejor cara. Cuando esté sellada la carne, ponemos el caldo de verduras. Dejamos que se cocinen todos los sabores hasta que tengamos listo nuestro locro argentino. Este ingrediente será el que dé lugar a un guiso que podemos acompañar de un poco de pan o de unas empanadas argentinas que completen la receta.',
    });

    Recipe.create({
      title: 'Choripan',
      image:
        'http://www.pasionesargentinas.es/images/noticias/1583240551chorip%C3%A1n%20argentino.jpg',
      summary:
        'El choripan es una comida típica argentina, que consiste de pan con chorizo asado a la parrilla y chimichurri. Este delicioso sándwich o hot dog latino, también conocido abreviadamente como chori, es popular en muchos países de América Latina.',
      score: 100,
      healthScore: 80,
      instructions:
        'Haga unas pequeñas incisiones o pinche los chorizos y póngalos en una parrilla caliente hasta que estén completamente cocidos y doraditos. También se pueden cortar los chorizos por la mitad longitudinalmente o dejarlos enteros. A veces se cortan por la mitad luego de asarlos y se los vuelve a asar por unos minutos antes de servirlos. Corte el pan por la mitad y póngalos en la parrilla, con la parte interior hacia abajo, para que se calienten y se doren ligeramente. Coloque una cucharada o más de salsa chimichurri en el pan y agregue el chorizo. Cubra con salsa chimichurri adicional, curtido de cebolla y guacamole al gusto. Para servir como picaditas o bocaditos pequeños, se puede cortar el chorizo y el pan en trozos más chicos.',
    });

    Recipe.create({
      title: 'Arepa de Huevo',
      image: 'https://okdiario.com/img/recetas/2017/04/21/arepa-y-huevo.jpg',
      summary:
        'Esta es una deliciosa receta de la costa caribeña de Colombia. Estas populares arepas de maíz a menudo se preparan en los pequeños mercados callejeros y verá una larga cola de clientes esperando para comprarlas.',
      score: 99.5,
      healthScore: 55,
      instructions:
        'En un recipiente mezclar la harina la sal. Vertir el agua caliente lentamente y revolver con una cuchara a medida que se va agregando mas agua. Mezclar muy bien hasta que conforme una masa consistente, dejar reposar por 10 minutos o hasta que sea posible manipularla. Tomar una pequeña porcion y colocarla en una superficie plana cubierta con una bolsa plastica o vinilo. Dejar la masa dentro de la bolsa y luego usar un rodillo para aplanarla. Con un cortador de galletas u otro cortador hacer circulos del tamaño deseado. Precalentar el aceite y freirlas a fuego medio. Cuando esten un poco doradas sacarlas a una superficie segura. Con un cuchillo hacer un corte en uno le sus lados de mas o menos 4 o 5 centimetros, haciendo espacio para introducir el huevo. Se coloca el huevo en un pocillo, se agrega sal y pimienta al gusto y luego se vierte dentro de la arepa. Se asegura la arepa con un poco mas de masa y luego se frie otra vez. Cuando este dorado por un lado darle la vuelta. Sacar la arepa a una plato con papel de cocina para que absorva el exceso de aceite. Servir caliente.',
    });

    Recipe.create({
      title: 'Ajiaco',
      image: 'https://cdn.colombia.com/gastronomia/2011/07/22/ajiaco-1458.jpg',
      summary:
        'Esta sopa suele ser espesa y rica, y es una comida principal. Tradicionalmente se añaden tortas de harina de maíz o arepas a muchas comidas, y en este plato aguacate, arroz y alcaparras.',
      score: 95,
      healthScore: 78,
      instructions:
        'En una olla suficientemente grande se vierte el agua y al leche y se colocan las pechugas y el gajo de cebolla entero, y se pone a fuego medio alto. Luego se añaden el cubo de caldo de gallina, las hojas de laurel, sal, comino y pimienta al gusto. Se añaden las mazorcas, las papas rojas y se dejan cocinar hasta que ablanden. Luego se adiciona las papas criollas (o papas amarillas), y se dejan cocinar hasta que espese. Se saca el pollo aparte para poder desmenuzarlo en trozos medianos. Se baja la temperatura a fuego medio, y se le agrega de nuevo el pollo. Se agrega un manojo de guascas (o se puede sustituir por una cucharada de orégano y se retiran antes de servir. Se retira la olla del fuego y se sirve el ajiaco caliente.',
    });

    Recipe.create({
      title: 'Agua de Panela',
      image: 'https://okdiario.com/img/2018/05/10/aguapanela.jpg',
      summary:
        'Es una bebida popular en Colombia. Puedes tomarlo frío o caliente. La melaza natural de este azúcar le da un rico sabor a melaza.',
      score: 95,
      healthScore: 95,
      instructions:
        'En una olla se coloca el agua, canela y la panela a hervir hasta que la panela o azúcar se derrita completamente.Se retiran las astillas de canela y se sirve caliente o fría. Se puede agregar el limón al servir.',
    });*/
  });
});
