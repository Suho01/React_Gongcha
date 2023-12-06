import React from 'react'
import { NavLink } from 'react-router-dom'

function Content() {
    return (
        <div className='w-full'>
            <div className='lg:w-[1200px] mx-auto'>
                <div className='lg:text-2xl md:text-2xl sm:text-xl text-lg font-bold lg:flex'>
                    <NavLink><img src="./../../img/best.png" alt="best" /></NavLink>
                    <div className='lg:w-[400px] w-full lg:h-[386px] h-full bg-[#f5f4f2] lg:p-[50px] p-10 box-border'>
                        <p className='lg:pb-[50px] pb-5'>매장검색</p>
                        <p className='pb-[50px] lg:block hidden text-[22px] text-[#666]'>공차 매장을 쉽고 빠르게<br />찾아보세요.</p>
                        <p className='lg:hidden block pb-5 md:text-xl sm:text-lg text-base text-[#666]'>공차 매장을 쉽고 빠르게 찾아보세요.</p>
                        <input type="text" placeholder="매장명 또는 주소를 입력하세요" className='w-full h-10 lg:text-base text-sm p-[15px] box-border font-normal search' />
                        <input type="button" value="매장검색하기" className='w-full h-[50px] bg-[#3b3230] text-white lg:text-base text-sm mt-[10px] cursor-pointer' />
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='lg:py-[60px] lg:pl-10 lg:w-[400px] p-10 howto'>
                        <h2 className='mb-5 lg:text-2xl md:text-2xl sm:text-xl text-lg font-bold'>HOW TO ORDER 주문하기</h2>
                        <p className='mb-5 text-[15px]'>공차는 취향에 맞게 토핑, 당도, 얼음량까지<br />맞춤주문 가능합니다.</p>
                        <NavLink href="#" className='text-[13px] font-bold underline'>자세히 보기　&gt;</NavLink>
                    </div>
                    <NavLink href='/'><img src="./../../img/delivery.png" alt="delivery" className='w-full' /></NavLink>
                </div>
                <div className='lg:flex md:flex'>
                    <div className='lg:w-[400px] lg:h-[450px] bg-[#ede6d6] lg:py-[60px] lg:pl-10 md:pl-0 pl-10 box-border md:basis-1/3 md:h-80'>
                        <h2 className='lg:text-2xl md:text-xl sm:text-xl text-lg font-bold lg:mb-[50px] lg:text-left md:text-center text-left lg:my-0 lg:py-0 py-10'>공차 가맹점 개설문의</h2>
                        <ul className='flex lg:px-0 md:px-2'>
                            <li className='lg:pb-20 pb-10 lg:w-[100px] basis-1/4 lg:text-xl font-bold'>개설안내</li>
                            <li className='lg:block md:hidden block lg:text-[15px] text-sm lg:leading-[25px] text-[#666]'>공차만의 프랜차이즈 운영<br />노하우로 안정된 창업을 이루세요.</li>
                            <li className='lg:hidden md:block hidden text-sm text-[#666] basis-3/4'>공차만의 프랜차이즈 운영 노하우로 안정된 창업을 이루세요.</li>
                        </ul>
                        <ul className='flex lg:px-0 md:px-2'>
                            <li className='lg:pb-0 pb-10 w-[100px] basis-1/4 lg:text-xl font-bold'>FAQ</li>
                            <li className='lg:block hidden text-[15px] leading-[25px] text-[#666]'>가맹점 개설과 관련한<br />자주 묻는 질문입니다.</li>
                            <li className='lg:hidden block text-sm text-[#666] basis-3/4'>가맹점 개설과 관련한 자주 묻는 질문입니다.</li>
                        </ul>
                        <input type="button" value="내용보기" className='lg:w-[320px] lg:h-[50px] lg:mt-10 md:w-full w-32 h-10 bg-[#6d5547] text-white text-[15px] font-bold cursor-pointer' />
                    </div>

                    <div className='lg:w-[400px] lg:h-[450px] relative membership md:basis-1/3'>
                        <span className='lg:w-[400px] lg:h-[97px] bg-white lg:p-[30px] box-border flex items-center text-[#c30f30] font-bold absolute bottom-0'>
                            <p>NEW 공차 멤버십 안내</p>
                            <NavLink href='/' className='text-[13px] text-[#777] underline lg:ml-[90px]'>자세히 보기　&gt;</NavLink>
                        </span>
                    </div>
                    <div className='lg:w-[400px] lg:h-[450px] newopen relative md:basis-1/3'>
                        <span className='lg:w-[400px] lg:h-[97px] bg-white flex lg:p-[30px] box-border items-center text-[#c30f30] font-bold absolute bottom-0'>
                            <p>오픈 매장 안내</p>
                            <NavLink href='/' className='text-[13px] text-[#777] underline lg:ml-[150px]'>자세히 보기　&gt;</NavLink>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-[471px] bg-[#f5eee8]'>
                <ul className='flex py-[60px] px-[400px] justify-between text-[15px]'>
                    <li className='lg:pr-[650px]'><h2 className='font-bold text-2xl'>공차 티 레시피</h2></li>
                    <li><NavLink href="/" className='font-bold text-[#993b42] border-b-2 border-[#993b42] pb-[6px]'>오리지널 티</NavLink></li>
                    <li><NavLink href="/" className='font-bold text-[#9b8777]'>밀크티</NavLink></li>
                    <li><NavLink href="/" className='font-bold text-[#9b8777]'>프룻티</NavLink></li>
                </ul>
                <div className='flex lg:px-[400px]'>
                    <img src="./../../img/brand_main_recipe_img1.jpg" alt="tea" className='w-[600px] h-[255px]' />
                    <ul className='leading-[50px] text-[15px] text-[#444]'>
                        <li><h1 className='font-bold text-4xl mb-[15px]'>TEA RECIPE - 티 레시피</h1></li>
                        <li><h2 className='text-[#993b42] font-bold text-2xl mb-5'>오리지널 티 - Original Tea</h2></li>
                        <li className='leading-[25px] mb-[25px]'>티백이나 가루가 아닌 황실에 바치던 잎차만 골라 1도 1초도 어기지 않고 차마다<br />다른 황금률로 우려 한 잔 한 잔 부드러움을 더해 만듭니다.</li>
                        <NavLink href="#"><input className='w-[152px] h-[35px] bg-black/0 border border-[#993b42] text-[#993b42] text-[13px] font-bold cursor-pointer leading-[35px]' type="button" value="메뉴 보러가기　&gt;" /></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content