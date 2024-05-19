const mkdirp = require("mkdirp")
let fs = require('fs')
const { capitalizeFirstLetter } = require("../utils")

const generatePages = (data) => {

    console.log('GENERATING PAGES...')

    data?.parts?.map(async part => {
       await mkdirp(`src/views/${part.name}`)
        part.subParts?.map(async subPart => {
            await mkdirp(`src/views/${part.name}/${subPart.name}`)
            fs.writeFile(`src/views/${part.name}/${subPart.name}/index.js`, 
`
import React, {useEffect} from 'react'
import Layout from '../../../layout'
import { connect } from 'react-redux'
import {${part.name}Actions} from '../../../Redux/Actions'
${
    subPart?.isInfo ? "import {useParams} from 'react-router-dom';" : ''
}
            
const ${capitalizeFirstLetter(part.name + '-' + subPart.name)} = ({
        ${
                    subPart?.states?.map(item => {
        return `${item}`
                    }).join(',\n    ')

                    + ',\n  ' +
                    subPart?.actions?.map(action => {
        return `${action}`
                    })?.join(',\n   ')
                }
}) => {

    ${
        subPart?.isInfo ? `let { id } = useParams();` : ''
    }

    useEffect(() => {
        ${
            subPart.isInfo ? 
            `${subPart?.actions?.filter(itm => itm.includes('get'))?.map(item => `if(id){\n${item}(id);\n}`).join('\n')}` :`${subPart?.actions?.filter(itm => itm.includes('get'))?.map(item => `${item}();`).join('\n')}`}
    }, [${subPart.isInfo ? 'id' : ''}])
    
    return (
        <Layout title={"${subPart.faName}"}>
               
        </Layout>
            )
    }

const mapStateToProps = state => ({
        ${
                    subPart?.states?.map(item => {
return `${item}: state.${part.name}State.${item}`
}).join(',\n    ')
                }
})
const mapDispatchToProps = {
    ${
                    subPart?.actions?.map(action => {
return `${action}: ${part.name}Actions.${action}`
                    })?.join(',\n   ')
                }
}
            
export default connect(mapStateToProps, mapDispatchToProps)(${capitalizeFirstLetter(part.name + '-' + subPart.name)})
            `,
            (err) => {
                if (err)
                    throw err
            })
        })
    })

}

module.exports = generatePages