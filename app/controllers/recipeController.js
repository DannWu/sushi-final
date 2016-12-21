var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe');

exports.findAll = function (req, res) {
    Recipe.find({}, function (err, results) {
        return res.send(results);
    });
};

exports.findByName = function (req, res) {
    var name = req.params.name;
    Recipe.findOne({ 'name': name }, function (err, result) {
        return res.send(result)
    });
};

exports.findById = function (req, res) {
    var id = req.params.id;
    Recipe.findOne({ '_id': id }, function (err, result) {
        return res.send(result)
    });
};

exports.update = function (req, res) {
    var id = req.params.id;
    var updates = req.body;
    Recipe.update({ '_id': id }, req.body,
        function (err, numberAffected) {
            if (err) return console.log(err);
            console.log('Updated Recipes', numberAffected);
            return res.sendStatus(202);
        })
};

exports.import = function (req, res) {
    Recipe.create(
        { 
            "name": "Guacamole",
            "date": "2016-10-01", 
            "description": "Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.", 
            "mainImageUrl": "img/home/guacamole.png",
            "images": ["guacamole.png","guacamole-2.jpg", "guacamole-3.jpg", "guacamole-4.jpg", "guacamole-5.jpg"],
            "ingredients": ["avacados", "salt", "red onions", "lime", "chiles"],
            "directions": "Peel and mash avocados in a medium serving bowl. Stir in onion, garlic, tomato, lime juice, salt and pepper. Season with remaining lime juice and salt and pepper to taste. Chill for half an hour to blend flavors."
         },
        { 
            "name": "Lasagna", 
            "date": "2013-09-01", 
            "description": "Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.", 
            "mainImageUrl": "img/home/lasagna-1.png",
            "images": ["lasagna-1.png","lasagna-2.png","lasagna-3.png","lasagna-4.png"],
            "ingredients": ["lasagna pasta", "tomatoes", "onions", "ground beef", "garlic", "cheese", "salt", "water", "black pepper", "parsley"],
            "directions": "In a skillet over medium heat, brown ground beef, onion and garlic; drain fat. Mix in basil, oregano, brown sugar, 1 1/2 teaspoons salt, diced tomatoes and tomato paste. Simmer for 30 to 45 minutes, stirring occasionally. Preheat oven to 375 degrees F (190 degrees C). Bring a large pot of lightly salted water to a boil. Add lasagna noodles, and cook for 5 to 8 minutes, or until al dente; drain. Lay noodles flat on towels, and blot dry. Bake in the preheated oven 30 minutes. Let stand 10 minutes before serving."
        },
        { 
            "name": "Pho-Chicken Noodle Soup",
            "date": "2014-04-15", 
            "description": "Pho (pronounced \"fuh\") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.", 
            "mainImageUrl": "img/home/pho.png",
            "images": ["pho.png","pho-2.jpg", "pho-3.jpg"],
            "ingredients": ["beef", "onions", "ginger", "salt", "fish sauce", "rice noodles", "parsley", "lime"],
            "directions": "Place the beef knuckle in a very large (9 quart or more) pot. Season with salt, and fill pot with 2 gallons of water. Bring to a boil, and cook for about 2 hours. Skim fat from the surface of the soup, and add the oxtail, radish and onions. Tie the anise pods, cinnamon stick, cloves, peppercorns and ginger in a cheesecloth or place in a spice bag; add to the soup. Stir in sugar, salt and fish sauce. Simmer over medium-low heat for at least 4 more hours (the longer, the better). At the end of cooking, taste, and add salt as needed. Strain broth, and return to the pot to keep at a simmer. Discard spices and bones. Reserve meat from the beef knuckle for other uses if desired. Place some noodles into each bowl, and top with a few raw beef slices. Ladle boiling broth over the beef and noodles in the bowl. Serve with hoisin sauce and Sriracha sauce on the side. Set onion, cilantro, bean sprouts, basil, green onions, and lime out at the table for individuals to add toppings to their liking."
        },
        { 
            "name": "Hamburger",
            "date": "2012-10-20", 
            "description": "A Hamburger (or often called as burger) is a type of food in the form of a rounded bread sliced in half and its Center is filled with patty which is usually taken from the meat, then the vegetables be lettuce, tomatoes and onions.", 
            "mainImageUrl": "img/home/guacamole.png",
            "images": ["hamburger.png","hamburger-2.jpg"],
            "ingredients": ["ground beef", "onions","salt", "cayanne pepper", "black pepper", "egg", "minced garlic"],
            "directions": "Place a frying pan over medium heat. Form the ground beef into a patty and cook to desired doneness. Fry egg in a small, lightly oiled pan over medium heat. Flip the egg over and cover with cheese. Cook until the yolk has hardened and the cheese has melted."
        }
        , function (err) {
            if (err) return console.log(err);
            return res.send(202);
        });
};



