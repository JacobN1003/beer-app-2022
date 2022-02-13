const BASE_URL = 'https://api.openbrewerydb.org/breweries'
const fetch = require('request')

exports.findBreweries = function(req, res){
    const {query, filters} = req.body

    fetch(BASE_URL + `/search?query=${query}`, (error, response) => {
        if(!error && response.statusCode === 200){
            let data;
            
            try {
                data = JSON.parse(response.body)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
            
            let result = [];
            
            for(const each of data){
                if(filters.byCity && filters.byCity.toLowerCase() !== each.city.toLowerCase()) continue;
                if(filters.byState && filters.byState.toLowerCase() !== each.state.toLowerCase()) continue;
                //if(filters.byZip && filters.byZip.toLowerCase() !== each.postal_code.toLowerCase()) continue;
                if(filters.byType && filters.byType.toLowerCase() !== each.brewery_type.toLowerCase()) continue;

                result.push(each.name)
            }
            
            res.send({ 'message': "ok", 'status': response.statusCode, 'data': result})
        }
        else{
            console.log(error)
            res.send({ 'message': "bad", 'status': response.statusCode, 'data': {} })
        } 
    })
}