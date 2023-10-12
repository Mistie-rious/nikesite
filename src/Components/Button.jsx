import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <div>
    <button className={`flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none 
    ${backgroundColor 
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : 'bg-rose-400  text-white border-rose-400'}rounded-full ${fullWidth && 'w-full'}"}`}>

        {label}
        
       {iconURL && <img 
        src={iconURL}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5'
        /> }
        </button>

    </div>
  )
}

export default Button