var mongoose    = require("mongoose");
var Schema      = mongoose.Schema;

var ProductSchema = new Schema({
   name: String,
   image: String,
   description: String,
   mpn: Number,
   brand: {
       name: String
   },
   price: Number,
   stock: Number
});

module.exports = mongoose.model('Product', ProductSchema);
