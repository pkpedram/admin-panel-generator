const { default: axios } = require('axios');
const express = require('express')
const fs = require('fs');
const generatePages = require('./nodejs/generatePages');
const generateRouter = require('./nodejs/generateRouter');
const generateSideBar = require('./nodejs/generateSideBar');
const app = express();

const config = require('./panel.config.json')

let PORT = 4202;


const generatePanel = () => {


    // generatePages(config)
    // generateRouter(config)
    generateSideBar(config)
}








app.listen(PORT, () => {
    console.log('ADMIN PANEL GENERATOR RUNNING ON PORT ', PORT)
    // generateReduxBase()
    generatePanel()

})

