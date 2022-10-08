(
    async () => {
    const database = require('./db/db');
    const Produto = require('./models/product');
    const Brand = require('./models/brand');
    const Variation = require('./models/variation');
    const Category = require('./models/category');

    try {
        const result = await database.sync();
        console.log(result);

        // const resultadoCreate = await Produto.create({
        //     name: 'Teclado',
        //     price: 50,
        //     description: 'Gamer com LEDs'
        // })
        const produtos = await Produto.findAll();
        console.log(produtos);

    } catch (error) {
        console.log(error);
    }
})();