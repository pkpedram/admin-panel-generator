const fs = require('fs');
const mkdirp = require('mkdirp');
const { capitalizeFirstLetter } = require('../utils');


const generateConfigFile = async (data) => {
    console.log('GENERATING CONFIG FILE...')
    let allKeys = Object.keys(data?.paths)
    let parts = allKeys.map(itm => itm.split('/')[1]).filter((value, index, self) => self.indexOf(value) === index);
    let subParts = parts.map(itm => (
        {
            partName: itm,
            subParts:  Object.keys(data?.paths).filter(item => item.split('/')[1] == itm).map(itm => ({
                name: itm,
                methods: Object.keys(data.paths[itm]).filter(itm => itm !== 'parameters'),
                isInfo:  itm.includes('{id}'),
                getSchema:  data.paths[itm].get ?  (itm?.includes('{id}') ?  data.definitions[data.paths[itm].get?.responses['200']?.schema?.$ref?.split('/')[2]] : data?.definitions[data.paths[itm].get?.responses['200'].schema?.properties?.results?.items?.$ref?.split('/')[2]]) : null,
                postSchema: itm.includes('{id}') ?  data.definitions[data.paths[itm].put?.parameters[0]?.schema?.$ref?.split('/')[2]] : data?.definitions[data.paths[itm].post?.parameters[0]?.schema?.$ref?.split('/')[2]]
            
            }))
            
        
        }
    ))

    

    fs.writeFile('panel.config.json', `
        {
            "parts": [
                ${
                    parts.map(part => {
                        return `
                            {
                                "name": "${part}",
                                "faName": "",
                                "subParts": [
                                    ${
                                        subParts.find(itm => itm.partName == part).subParts.map(subPart => (`{
                                            "name": "${subPart.name.includes('{id}') ? capitalizeFirstLetter( subPart.name.includes('{id}')  ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/').filter(itm => itm !== part ).join('-'))+ 'Info' :  capitalizeFirstLetter( subPart.name.includes('{id}')  ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/').filter(itm => itm !== part ).join('-'))}",
                                            "faName": "",
                                            "url" : "${subPart.name.includes('{id}') ? subPart.name.split('/')?.filter(itm => itm !== '{id}' ).join('/') + ':id' : subPart.name}",
                                            "getSchema": ${JSON.stringify(subPart.getSchema) ? JSON.stringify(subPart.getSchema) : 'null' },
                                            "postSchema": ${JSON.stringify(subPart.postSchema) ? JSON.stringify(subPart.postSchema) : 'null'},
                                            "actions": [${
                                               
                                                        subPart.isInfo ?
                                                           subPart.methods.map(method => {
                                                            
                                                                switch(method){
                                                                    case 'get':
                                                                        return `"get${capitalizeFirstLetter( subPart.name.includes('{id}')  ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/').filter(itm => itm !== part ).join('-'))}Info"`
                                               
                                                                    case 'put':
                                                                        return `"put${capitalizeFirstLetter( subPart.name.includes('{id}') ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/')[2])}"`
                                                                    case 'patch':
                                                                        return `"patch${capitalizeFirstLetter( subPart.name.includes('{id}') ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/')[2])}"`
                                                                    case 'delete':
                                                                        return `"delete${capitalizeFirstLetter( subPart.name.includes('{id}') ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/')[2])}"` 
                                                                }
                                                            }).join(',')
                                                       :
                                                            subPart.methods.map(method => {
                                                                  
                                                                switch(method){
                                                                    
                                                                    case 'get':
                                                                    return `"get${capitalizeFirstLetter(subPart.name.split('/').filter(itm => itm !== part ).join('-'))}List"`
                                                                    case 'post':
                                                return `"post${capitalizeFirstLetter(subPart.name.split('/').filter(itm => itm !== part ).join('-'))}"`
                                                                }
                                                            }).join(',')
                                                        
                                                   
                                                }],
                                                "states": [${
                                                    

                                                        subPart.isInfo ?
                                                            `"${capitalizeFirstLetter( subPart.name.includes('{id}')  ? subPart.name.split('/').filter(itm => itm !== '{id}' && itm !== part ).join('-') : subPart.name.split('/').filter(itm => itm !== part ).join('-'))}Info"`
                                                       :
                                                            `"${capitalizeFirstLetter(subPart.name.split('/').filter(itm => itm !== part ).join('-'))}List"`
                                                        
                                                   
                                                }],
                                            "isInfo":  ${subPart.name.includes('{id}')}
                                        }`)).join(',\n')
                                    }
                                ]
                            }
                        `
                    })
                }
            ]
        }
    `, (err) => {
        if (err){
            throw err
        }
    })
    
    
    
    
}

module.exports = generateConfigFile