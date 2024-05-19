const { default: axios } = require('axios');
const express = require('express')
const fs = require('fs')
const app = express();
const generateActions = require('./nodejs/generateActions/index');
const generateConfigFile = require('./nodejs/generateConfigFile');
const generateReducers = require('./nodejs/generateReducers');
const generateReduxBase = require('./nodejs/generateReduxBase');
const { swaggerLink } = require('./swagger.config');

let PORT = 4201;

let swaggerData = {}

const getSWaggerData = async () => {
    try {
        console.log('GETTING SWAGGER DATA...')
        let res = await axios.get(swaggerLink);
        if(res.data){
            console.log(`${res.data?.info?.title} FETCHED SUCCESSFULLY!`)
            // generateActions(res.data)
            // generateReducers(res.data)
            generateConfigFile(res.data)
            // console.log(swaggerData)     
        }
        
    } catch (error) {
        console.error('ERROR WHILE FETCHING DATA.')
        console.error(error)
       
    }
}







app.listen(PORT, () => {
    console.log('ADMIN PANEL GENERATOR RUNNING ON PORT ', PORT)
    // generateReduxBase()
    getSWaggerData()

})

