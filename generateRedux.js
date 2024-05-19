const { default: axios } = require('axios');
const express = require('express')
const fs = require('fs')
const app = express();
const generateActions = require('./nodejs/generateActions/index');
const generateReducers = require('./nodejs/generateReducers');
const generateReduxBase = require('./nodejs/generateReduxBase');
const { swaggerLink } = require('./swagger.config');
let PORT = 4201;
const data = require('./data.json')

const getSWaggerData = async () => {
    try {
        console.log('GETTING SWAGGER DATA...')
        // let res = await axios.get(swaggerLink);
        // if(res.data){
        //     console.log(`${res.data?.info?.title} FETCHED SUCCESSFULLY!`)
        //     generateActions(res.data)
        //     generateReducers(res.data)   
        // }
        generateActions(data)
        generateReducers(data)
    } catch (error) {
        console.error('ERROR WHILE FETCHING DATA.')
        console.error(error)
       
    }
}







app.listen(PORT, () => {
    console.log('SWAGGER REDUX GENERATOR RUNNING ON PORT ', PORT)
    generateReduxBase()
    getSWaggerData()

})

