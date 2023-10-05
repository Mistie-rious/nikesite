import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <div>
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none bg-rose-400 rounded-full text-white border-rose-200'>
        {label}
        
        <img 
        src={iconURL}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5'
        />
        </button>

    </div>
  )
}

export default Button