import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch()

    
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(setQuery(text))
       
        setText('');
    }

  return (
    <div>
        <form  onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex  bg-gray-900 p-10 gap-5'>
            <input  required type="text" placeholder='Search anything...' value={text} onChange={(e)=>{
                setText(e.target.value)
            }}
            className=' w-full border-2 px-4 py-2 text-xl rounded outline-none'  />
            <button className=' cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none active:scale-0.95'>Search</button>
        </form>
      
    </div>
  )
}

export default SearchBar
