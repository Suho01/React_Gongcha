import React from 'react'
import { NavLink } from 'react-router-dom'

function Content() {
    return (
        <div className='w-full'>
            <div className='lg:w-[1200px] mx-auto'>
                <div className='text-2xl font-bold flex'>
                    <NavLink><img src="./../../img/best.png" alt="best" /></NavLink>
                    <div className='w-[400px] h-[386px] bg-[#f5f4f2] p-[50px] box-border'>
                        <p className='pb-[50px]'>매장검색</p>
                        <p className='pb-[50px] text-[22px] text-[#666]'>공차 매장을 쉽고 빠르게<br />찾아보세요.</p>
                        <input type="text" placeholder="매장명 또는 주소를 입력하세요" className='w-full h-10 text-base p-[15px] box-border font-normal search' />
                        <input type="button" value="매장검색하기" className='w-full h-[50px] bg-[#3b3230] text-white text-base mt-[10px] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content