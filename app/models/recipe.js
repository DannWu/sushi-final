var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: String,
    date: String,
    description: String,
    mainImageUrl: String,
    images: [String],
    ingredients: [String],
    directions: String
});

mongoose.model('Recipe', RecipeSchema);