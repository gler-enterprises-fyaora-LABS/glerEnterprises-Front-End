import React from 'react'

const NextButton = ({text}) => {
  return (
    <div className='w-[300px] h-[48px] rounded-[100px]'>
        <button className='w-full h-full bg-blue-300 hover:bg-blue-600 text-white font-bold rounded-[100px]'>
            {text}
        </button>
    </div>
  )
}

export default NextButton