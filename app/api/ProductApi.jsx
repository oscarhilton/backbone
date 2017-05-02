var axios = require("axios");

const PRODCUTS_API = "https://backbone-oscarhilton.c9users.io/api/products";

module.exports = {
    
    getProducts: function(){
        
        var requestUrl = PRODCUTS_API;
    
        return axios.get(requestUrl)
            .then(function(res){
                return{
                    results: res.data
                };
            }, function(res) {
                throw new Error(res);
            });
    },
    getProduct: function (id){
        var requestUrl = `${PRODCUTS_API}/${id}`;
        
        return axios.get(requestUrl)
        
            .then(function(res){
            
            console.log(res);
            return {
                results: res
            };
            
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
