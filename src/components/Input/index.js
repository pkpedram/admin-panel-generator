import React from 'react'
import { useState } from 'react'
import {HiEye, HiEyeOff} from 'react-icons/hi'
const Input = ({
    type,
    icon,
    value,
    onChange,
    placeholder,
    className,
    id,
    disabled,
    defaultValue,
    onFocus
}) => {

    const [thisType, setThisType] = useState(type)
    
  return (
    <div className={`flex items-center h-12 border border-gray-400 rounded-lg w-full bg-black/20 backdrop-blur justify-between ${className}`}>
       {
        icon &&  <p className='text-white text-lg mr-3'>{icon}</p>
       }
       <input 
       type={type === 'password' ? thisType : type} 
       value={value}
       placeholder={placeholder}
       onChange={onChange}
       id={id ? id : ''}
       disabled={disabled}
       defaultValue={defaultValue}
       onFocus={onFocus}
       className="w-full h-full rounded-lg bg-transparent px-3 text-white outline-none placeholder:text-gray-400"
/>      
{
    type === 'password' &&
    <div 
    className='ml-3 text-lg text-white cursor-pointer'
    onClick={() => thisType == type ? setThisType('text') : setThisType(type)}>
        {
            thisType == 'password' ? <HiEye /> : <HiEyeOff />
        }
    </div>
}
    </div>
  )
}

export default Input