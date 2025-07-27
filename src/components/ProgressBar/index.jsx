import React from 'react'

const ProgressBar = ({value,type}) => {
  return (
    <div className='w-[150px] h-auto rounded-md overflow-hidden bg-[#f1f1f1]'>
        <span 
        className={`w-[${value}%] h-[8px] flex items-center 
        ${type === 'success' && 'bg-green-400'}
        ${type === 'error' && 'bg-red-400'}
        ${type === 'warning' && 'bg-yellow-400'}
        
        `}
        >
        </span>
    </div>
  )
}

export default ProgressBar;