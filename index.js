(async () => {
    const database = require('./db/db');
    const Produto = require('./product/product');

    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();