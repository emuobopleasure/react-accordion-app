import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Question = ({item}) => {

  const [showInfo, setShowInfo] = useState(false)


  const handleShow = () => {
    setShowInfo((prevState) => !prevState)
  }
  return (
    <section className='border border-gray-400 py-4 rounded-sm shadow-gray-400 shadow-sm'>
        <div className='wrapper flex justify-between items-center mx-6'>
            <div className='question text-[1rem] font-medium'>
              {item.title}
            </div>
            <button 
              onClick={handleShow}
              className='button bg-gray-200 px-1 py-1 rounded-full text-lg'>
              {showInfo ? <FiMinus/> :
              <FiPlus/>}
            </button>
        </div>
        <div className='answer mx-6 text-[0.9rem] text-gray-600'>
              {showInfo && item.info}
        </div>
    </section>
  )
}

export default Question