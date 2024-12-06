import { Logo } from '@/svg/Logo'
import React from 'react'
import Flex from '../Flex/Flex'
import { menuData } from './menuData'
import Lists from '../Lists/Lists'
import Listitems from '../Lists/Listitems'
import TopBar from './TopBar'

const Navbar = () => {
    return (
        <>
            <div className='container py-8'>
                <Flex className="items-center justify-between">
                    <div className='w-1/3'>
                        <Logo />
                    </div>
                    <div className='w-[67%]'>
                        <Lists className="flex gap-x-10 justify-end">
                            {
                                menuData.map((item, i) => (
                                    <Listitems key={i} links={item.link} className="text-gray font-normal text-sm hover:font-bold hover:text-black">{item.title}</Listitems>
                                ))
                            }
                        </Lists>
                    </div>
                </Flex>
            </div>
            <div className='bg-white-100 py-[25px]'>
                <TopBar />
            </div>
        </>
    )
}

export default Navbar
