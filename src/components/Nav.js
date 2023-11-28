import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function Nav() {
    const navMenu = [
        {
            kor : "브랜드", en : "Brand"
        },
        {
            kor : "메뉴", en : "Menu"
        },
        {
            kor : "매장", en : "Store"
        },
        {
            kor : "멤버십", en : "Membership"
        },
        {
            kor : "제휴 서비스", en : "Benefit"
        },
        {
            kor : "이벤트&뉴스", en : "Event&News"
        }
    ];

    const subMenu = [
        ["브랜드 소개", "공차의 약속", "브랜드 아이덴티티", "세계속의 공차"],
        ["주문방법", "신메뉴", "음료", "빙수", "디저트", "MD상품", "티스토리", "티레시피"],
        ["매장 찾기", "가맹점 개설문의"],
        ["NEW 공차 멤버십", "공차 카드 & e-Gift", "FAQ"],
        ["통신사 제휴", "결제 서비스"],
        ["이벤트", "공차소식"]
    ];
    
    return (
        <>
            <div className='w-screen h-[110px] bg-white fixed top-0 left-1/2 -translate-x-1/2 z-50'>
                <div className='lg:max-w-7xl h-full bg-white mx-auto'>
                    <div className='flex text-center'>
                        <div className='basis-[5%] w-[62px] h-[81px] mt-[14.5px]'>
                            <NavLink href='/'><img src="./../../img/logo.png" alt="logo" /></NavLink>
                        </div>
                        <div className='basis-[65%] font-bold tracking-tight text-lg group'>
                            <ul className='flex leading-[110px]'>
                                {
                                    navMenu.map((e, i) => {
                                        return (
                                            <li key={i} className='basis-[20%] relative navMenu'><NavLink>{e.en}</NavLink></li>
                                        );
                                    })
                                }
                            </ul>
                            <div className='text-sm font-normal flex justify-between flex-wrap transition-all duration-500 w-full overflow-hidden h-0 group-hover:h-[250px] after:absolute after:w-screen after:h-0 after:left-0 after:bg-[#666]/80 after:duration-500 after:-z-10 after:border-b group-hover:after:h-[260px]'>
                                {
                                    Array(6).fill().map((_, i) => {
                                        return (
                                            <ul key={i} className='basis-[15%] leading-[40px] pt-[10px] w-full text-[15px]'>
                                                {
                                                    subMenu[i].map((e) => {
                                                        return (
                                                            <li><NavLink href='/' className='text-white'>{e}</NavLink></li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex text-[13px] text-[#3b3b3b] h-[110px] leading-[110px] basis-[30%] relative'>
                            <div className='w-1/2 flex justify-around items-center'>
                                <p><NavLink href='/' className='hover:text-[#cf3e58]'>공지사항</NavLink></p>
                                {
                                    Array(3).fill().map((_, i) => {
                                        return (
                                            <p key={i}><NavLink href='/'><img src={`./../../img/btn_${i + 1}.png`} alt={i + 1} /></NavLink></p>
                                        );
                                    })
                                }
                            </div>
                            <div className='absolute right-0'>
                                <NavLink href='/' className='flex justify-between w-[146px] h-[95px] bg-[#3d0303] rounded-bl-[20px] rounded-br-[20px] text-white text-lg font-bold leading-[26px] text-left py-5 px-[15px] box-border'>
                                    <span><img src="./../../img/go_main_franchise_ico.png" alt="main_franchise" /></span>
                                    <span>가맹점<br />개설문의</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* swiper */}
            <div className='mt-[110px]'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    navigation={{clickable: true}}
                    modules={[Autoplay, Navigation]}
                    className=''>
                    {
                        Array(6).fill().map((_, i) => {
                            return (
                                <>
                                    <SwiperSlide key={i}><img src={`./../../img/slide${i + 1}.jpg`} alt={i + 1} className='w-[2560px] h-[850px] object-cover mx-auto' /></SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Nav
