
let fs = require('fs');
const { capitalizeFirstLetter } = require('../utils');

const generateRouter = (data) => {
    console.log('GENERATING ROUTER...')
    fs.writeFile('src/router.js',
`
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import {userActions} from './Redux/Actions/'
import SideBar from './components/SideBar'
import { publicActions } from './Redux/Actions'
import Loading from './components/Loading'

//PAGES
import Error404Page from './views/404'
import LoginPage from './views/login'
${
data?.parts?.map(part => {return part.subParts?.map(subPart => `import ${capitalizeFirstLetter(part.name + '-' + subPart.name)} from './views/${part.name}/${subPart.name}'`).join('\n')}).join('\n')
}




const CostumeRouter = ({isLogin, loadUserData, getUserData, checkLayoutVersion, userData, isLoading}) => {

  let access = localStorage.getItem('access')

  useEffect(() => {
    loadUserData();
    checkLayoutVersion();
  }, [])

  useEffect(() => {
    if(access){
      getUserData()
    }
  }, [access])

  let routes = [
  
    ${
        data?.parts?.map(part => {return part.subParts?.map(subPart => `{\n path: '${subPart.url}',\n element: <${capitalizeFirstLetter(part.name + '-' + subPart.name)}/>\n}`).join(',\n   ')}).join(',\n  ')
    },
    {
        path: '*',
        element: <Error404Page />
      },
        
  ];

 

  
  return (
    <div className='w-full min-h-screen flex '
    
    >
      {
        isLoading && <Loading />
      }
    <BrowserRouter>
    {
      // isLogin &&
        <SideBar
       />
      }
   <div className='w-full flex justify-center'>
   {
      !isLogin ? <LoginPage /> :
     
      <Routes>{
          
          routes.filter(itm => itm.path?.length).map(({path, element}, i) => <Route path={path} element={element} />
          
          )
}
      </Routes>
    
   
    }
   </div>
      
    </BrowserRouter>
    </div>
  )
}
const mapStateToProps = state => ({
isLogin: state.userState.isLogin,
isLoading: state.publicState.loading,
userData: state.userState.userData

})
const mapDispatchToProps ={
  loadUserData: userActions.loadUserData,
  getUserData: userActions.getUserData,
  checkLayoutVersion: publicActions.checkLayoutVersion
}

export default connect(mapStateToProps, mapDispatchToProps)(CostumeRouter)
`,
err => {
    if (err)
        throw err
}
)
}

module.exports = generateRouter;