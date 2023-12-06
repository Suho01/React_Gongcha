import React from 'react'

function Footer() {
    const footer1 = ["회사소개", "제휴/제안", "고객센터", "개인정보처리방침", "이메일무단수집거부", "윤리규범 실천지침", "HOT-LINE"];
    const footer2 = ["서울 종로구 종로 47(공평동, 7층)", "㈜공차코리아 대표이사 박재홍", "사업자등록번호 214-88-84534", "통신판매번호: 2020-서울종로-0966"];

    return (
        <div className='w-full h-[166px] flex bg-[#f1f2f3]'>
            <div className='flex w-[650px] h-[168px] bg-[#575757] text-[#b5b4b4] text-xs justify-around items-end pb-[30px] pl-[300px] box-border'>
                <img src="./../../img/ft_logo.png" alt="ft_logo" className='w-[69px] h-[90px]' />
                <p>(C)GONGCHA KOREA CO.,LTD<br />ALL RIGHTS RESERVED.</p>
            </div>
            <div className='w-[900px] h-[166px]'>
                <ul className='flex justify-between p-5 font-bold text-[15px] items-center'>
                    {
                        footer1.map((e, i) => {
                            return (
                                <li key={i} className={`${i === 3 ? 'text-lg text-[#444]' : ''} relative after:w-[1px] after:h-[14px] after:bg-[#a4a4a4] after:absolute after:top-1 after:-left-5 first:after:w-0`}>{e}</li>
                            )
                        })
                    }
                </ul>
                <ul className='flex pl-[10px] text-[15px]'>
                    <li className='font-bold px-[10px] text-[#666]'>고객센터</li>
                    <li className='font-bold px-[10px] text-[#666]'><img src="./../../img/ico_tell.png" alt="tel" className='inline' /> 02-779-7758</li>
                    <li className='font-normal text-[13px] leading-5 px-[10px] text-[#666]'>운영시간 : 월요일~목요일 ( 오전 9시 ~ 오후 6시), 금요일 (오전 9시 ~ 오후 1시)<br />점심시간 : 낮 12시~오후 1시 / 주말 및 공휴일 휴무</li>
                </ul>
                <ul className='flex justify-between text-[13px] text-[#666] p-5'>
                    {
                        footer2.map((e, i) => {
                            return (
                                <li key={i} className='relative after:absolute after:w-[1px] after:h-[14px] after:bg-[#a4a4a4] after:top-1 after:-right-5 after:last:w-0'>{e}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer