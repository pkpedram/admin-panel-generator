import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {FiChevronRight} from 'react-icons/fi'


const Layout = ({children, controlHamberMenu, className, isMobile}) => {
  const location = useLocation()
  const navigate = useNavigate()



  return (
    <div className={`w-4/5 max-w-7xl py-8`}>
        <div className={`w-full flex items-center flex-col ${className} ${isMobile ? '!pb-20 !pt-10' : ''}`}>
          { isMobile && (
            location.pathname !== '/' &&  <div className='w-full flex items-center'>
            <p onClick={() => navigate(-1)} className="text-white text-3xl mb-6">
              <FiChevronRight />
            </p>
          </div>
          )
          }
        {children}
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
  isLogin : state.userState.isLogin,
  isMobile: state.publicState.isMobile
})
const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)