'use client'
import React, { useRef, useState } from 'react'
import Flex from '../Flex/Flex'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import Lists from '../Lists/Lists';
import Listitems from '../Lists/Listitems';
import { categoryData } from './categoryData';
import clickOutside from '@/helpers/clickOutside';
import { accountData } from './accountData';


const TopBar = () => {


const clickOuterMenu = useRef(null)
const [showdropdown, setShowdropdown] = useState(false)

clickOutside(clickOuterMenu, ()=>{
  setShowdropdown(false)
})




const clickInnerMenu = useRef(null)
const [showdropdowninfo, setShowdropdowninfo] = useState(false)

clickOutside(clickInnerMenu, ()=>{
  setShowdropdowninfo(false)
})


// clickOutside 2 ta parameter pass korbe ekta hocche ref arekta hocche func







return(

  <div className='py-[10px] bg-white-100'>
    <div className="container">
      <Flex className='justify-between items-center'>
        <div className='w-1/6 cursor-pointer relative' onClick={()=>setShowdropdown(true)}>
          <Flex className='items-center'>
            <HiMiniBars3BottomLeft fill='#262626' />
            <span className='ml-2 font-primaryFont text-sm font-normal text-black'>Shop by Category</span>
          </Flex>
          {
            showdropdown && 
            <div className='w-full bg-white shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)]  rounded-md absolute top-[150%] left-0' ref={clickOuterMenu}>
            <Lists>
              {
                categoryData.map((item, i)=>(
                  <Listitems className='py-3 font-primaryFont pl-2 text-gray font-medium text-md hover:font-bold hover:text-black transition-all duration-500 ease-in-out border-b border-white-200  last:border-b-0' key={i}  links={item.links}>
                    {item.title}
              </Listitems>
                ))
              }
            </Lists>
          </div>
          }
        </div>
        <div className='w-1/3 relative'>
          <input className='w-full pl-5 py-4 text-sm font-primaryFont font-normal' type="text" placeholder='Search Products' />
          <FaSearch fill='#262626' className='border-none outline-none focus:none absolute top-1/2 translate-y-[-50%] right-5 ' />


        </div>
        <div className='w-1/6'>
          <div>
            <Flex className='items-center'>
              <div className='cursor-pointer relative' onClick={()=>setShowdropdowninfo(true)}>
                <Flex >
                  
                  <BiSolidUser />
            <BiSolidDownArrow className='w-2.5 ml-1'/>
                  
                
                </Flex>
                
                {
            showdropdowninfo &&  <div className='w-[200px] bg-white shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)]  rounded-md absolute top-[150%] left-0' ref={clickInnerMenu}>
                <Lists>
              {
                accountData.map((item, i)=>(
                  <Listitems className='py-3 font-primaryFont pl-2 text-gray font-medium text-md hover:font-bold hover:text-black transition-all duration-500 ease-in-out border-b border-white-200  last:border-b-0' key={i}  links={item.links}>
                    {item.title}
              </Listitems>
                ))
              }
            </Lists>
                </div>
}
</div>

              
            
            <FaShoppingCart className='ml-10'/>
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  </div>

)
}

export default TopBar
