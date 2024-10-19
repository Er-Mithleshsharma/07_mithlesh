import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/list')
    }
  return (
    <div className='flex justify-between p-4'>
        <div><img className='h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXXk0R8QY3kqdbN5EOyBXXRg_6GF4IwFP1Q&s'/></div>
    <div onClick={clickHandler} className='p-4 bg-red-500 text-white border-r-2 font-bold shadow-md cursor-pointer'>
        O7 Car Parking System List
    </div>
    </div>
    
  )
}

export default Header