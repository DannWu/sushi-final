module.exports = function (app) {
    var recipes = require('./controllers/recipeController');
    app.get('/api/recipes', recipes.findAll);
    app.get('/api/recipes/:name', recipes.findByName);
    app.get('/api/recipes/:id', recipes.findById);
    app.put('/api/recipes/:id', recipes.update);
    app.get('/api/import', recipes.import);
}