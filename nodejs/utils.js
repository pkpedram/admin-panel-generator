 module.exports = {
    capitalizeFirstLetter: (string = '') => {
        let data = string.split('-')
    return data.map(itm => itm.charAt(0).toUpperCase() + itm.slice(1)).join('')
  }
 }

