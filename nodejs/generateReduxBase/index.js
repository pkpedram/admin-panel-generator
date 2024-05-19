const { error } = require('console');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');



const generateReduxBase = async (data) => {
  
    console.log('GENERATING REDUX BASE....')

    await mkdirp('src/Redux')
    await mkdirp('src/Redux/Actions')
    await mkdirp('src/Redux/Reducers')

    // fs.readdir()

    fs.readdirSync('nodejs/baseReduxFiles').forEach(file => {
      
        fs.copy(`nodejs/baseReduxFiles/${file}`, `src/Redux/${file}`, (err) => {
            console.log(err)
        })
        console.log(file, ' Copied Successfully!')
      });


    console.log('REDUX BASE GENERATED SUCCESSFULLY!')
    console.log('\n ________________________________')
}

module.exports = generateReduxBase