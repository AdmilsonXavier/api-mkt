const Category = require('./models/category');

(async () => {
    const database = require('./db/db');
    const Produto = require('./models/product');
    const Brand = require('./models/brand');
    const Variation = require('./models/variation');
    const Category = require('./models/category');

    try {
        const result = await database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();