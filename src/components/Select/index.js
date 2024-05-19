import React from 'react'
import findObjectValue from '../../utils/findObjectValue'

const Select = ({
    options,
    icon,
    keyOfOption = [['title']],
    valueOfOption = 'id',
    value,
    onChange,
    title,
    className
}) => {
  return (
    <div className={`flex items-center relative h-12 border border-gray-400 rounded-lg w-full bg-black/20 backdrop-blur justify-between ${className}`}>
        <p className='absolute text-white text-lg right-3'>{icon}</p>
        <select value={value} onChange={onChange} 
        className={`w-full h-full rounded-lg relative outline-none pr-10 ${value == null ? 'text-gray-400' : 'text-white'} bg-transparent`}
        >
            <option value={''} className="text-gray-400">{title}</option>
            {
                options?.map((item) => (
                    <option className='bg-black hover:!text-black' value={item[valueOfOption]}>{keyOfOption?.map(key => `${findObjectValue(item, key)} `)}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Select

