var axios = require("axios");

const PRODUCTS_API = "https://backbone-oscarhilton.c9users.io/api/products";

class ProductApi {
    
    static getProducts() {
        var requestUrl = PRODUCTS_API;
    
        return axios.get(requestUrl)
            .then(function(res){
                return{
                    results: res.data
                };
            }, function(res) {
                throw new Error(res);
            });
    }
    
    static createProduct(product) {
        var requestUrl = PRODUCTS_API;
    
        return axios.post(requestUrl, product)
            .then(function(res){
                return{
                    results: res.data
                };
            }, function(res) {
                throw new Error(res);
            });
    }
    
    static deleteProduct(product) {
        var requestUrl = PRODUCTS_API;
    
        return axios.post(requestUrl, {
            _id: product
        })
            .then(function(res){
                return{
                    results: res.data
                };
            }, function(res) {
                throw new Error(res);
            });
    }
    
}

export default ProductApi;