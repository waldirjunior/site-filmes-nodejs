module.exports = () => {
    require('dotenv').config() // // console.log(process.env.DB_HOST)

    //Libs controllers da aplicação
    const express = require('express')
    const consign = require('consign');

    const app = express()

    app.disable('x-powered-by') // a referência de que o Express/Node compõem a lista de tecnologias utilizadas, isso irá afastar rotinas mais simples de varredura e ataques automatizados;

    consign({
        cwd: 'app',
        verbose: process.env.APP_DEBUG === 'true' || false, // quando ativo irá imprimir no terminal quais arquivos o Consign localizou e incluiu, em desenvolvimento esse parâmetro é bem vindo, uma vez que pode relatar erros ao localizar ou incluir arquivos. Já em produção é recomendado manter como false; Observe que incluímos lógica que busca a configuração a partir do dotenv (tenha em mente que será retornar uma string);
        locale: 'pt-br'
    }).include('controllers').into(app)

    return app;
}