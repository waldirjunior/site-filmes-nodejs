const requestify = require('requestify'); 


/** @param { import('express').Express} app */
module.exports = app => {

    app.get('/filmes/:nomeFilme', (req, res) => {
        let nomeFilme = req.params.nomeFilme;
    
        requestify.get('https://api.themoviedb.org/3/search/movie?api_key=c158b2f342a0f004be2bf12d2a039b42&language=pt-BR&query=%s&page=1&include_adult=fals').then(function(response) {
            res.json(response.getBody())
            // console.log(response.body);
        });
    })
    


}