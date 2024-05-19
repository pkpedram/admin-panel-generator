import React from 'react'
import logo from '../../assets/images/logo.jpeg'

const Loading = () => {
  return (
    <div className='w-full h-screen fixed top-0 right-0 bg-black/90 backdrop-blur flex items-center justify-center z-50 '>
            <img src={logo} className="animate-bounce" />
    </div>
  )
}

export default Loading