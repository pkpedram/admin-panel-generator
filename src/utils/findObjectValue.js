const findObjectValue = (object, path) => {
    let final = object
   
        path.map(
            itm => {
                final = final[itm]
                
            }
        )
    
    if(typeof final !== 'object'){
        return final
    }
}

export default findObjectValue;
