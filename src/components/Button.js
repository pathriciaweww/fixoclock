import React from "react";

const Button = (props) => {
    return(
        <button className='relative px-6 py-2 group rounded-lg overflow-hidden bg-gradient-to-r from-yellow-grad to-orange-grad text-white'>
          <span className='absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 group-hover:w-full transition-all ease-linear duration-1000 bg-gradient-to-r from-green-500 to-blue-500 left-0 top-0'></span>
          <span className='relative font-bold'>{props.children}</span></button>      
    )
}
export default Button