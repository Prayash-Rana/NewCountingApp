import React from 'react'
import Card2 from './components/Card2';
import { FaAdn ,FaCodepen} from "react-icons/fa";


const AppEp16 = () => {
  return (
    <div>
      <Card2  name= "props issue name"/>
    
      <h1 className='bg-purple-500 text-5xl '>
        <FaAdn className='inline-block' />
        <FaCodepen className='inline-block' />
      </h1>
    </div>
  )
}

export default AppEp16;
