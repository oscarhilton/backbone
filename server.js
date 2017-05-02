var express     = require('express'); 
var app         = express(); 
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");


//Connect to DB
mongoose.connect("mongodb://"+process.env.IP+":27017");
var db = mongoose.connection;
db.once('open', function() {
  console.log("connected to mongoDB!");
});


//Use BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var port = process.env.PORT || 8080;

var router = express.Router();  

router.use(function(req, res, next){
  // do logging
  console.log('Something is happening!');
  next();
});

//Models
var Product = require('./app/models/product');

router.get('/', function(req, res) {
  res.json({ message: 'Hey bitches! This is the backbone api'})
});

router.route('/products')
      
      .post(function(req, res)
      {
        
        var product = new Product();
        product.name        = req.body.name;
        product.image       = req.body.image;
        product.description = req.body.description;
        product.npm         = req.body.npm;
        product.price       = req.body.price;
        product.stock       = req.body.stock;
        
        product.save(function(err)
        {
          if(err){
            res.send(err);
          }
          
          res.json({ message : "Product created!" });
            
        });
      })
      
      .get(function(req, res)
      {
        Product.find(function(err, products)
        {
          if(err)
          {
            res.send(err);
          }
          res.json(products);
        })
      })
      
router.route('/products/:product_id')

    .get(function(req, res) {
        Product.findById(req.params.product_id, function(err, product) 
        {
            if (err)
            {
              res.send(err);
            }
            res.json(product);
        });
    })
    
    .put(function(req, res)
    {
      
        Product.findById(req.params.product_id, function(err, product) 
        {
            if(err)
            {
              res.send(err);
            }
            
            product.name = req.body.name;
            
            product.save(function(err) 
            {
              if(err)
              {
                res.send(err);
              }
              
              res.json({ message : "Product updated!" })
            });
        });
    })
    
    .delete(function(req, res) 
    {
        Product.remove({
          _id: req.params.product_id
        }, 
        function(err, product)
        {
          if(err)
          {
            res.send(err);
          }
          
          res.json({ message : "Product deleted!" })
        })
    });


app.use('/api', router);

app.listen(port);
console.log("Shit's going down on port " + port);