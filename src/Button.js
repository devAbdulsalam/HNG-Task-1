import React from 'react'

const Button = ({link, id, name}) => {
  return (
    <div className='text-center m-auto w-full mb-5'>
        <a href={link} id={id} target="_blank" rel="noreferrer" className='bg-[#F4F5F7] block font-semibold m-auto p-3 w-full hover:bg-gray-300 rounded-md'>{name}</a>
    </div>
  )
}

export default Button