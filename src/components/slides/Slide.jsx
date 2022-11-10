import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import './slides.css'

export default function Slide({selected, slides, onChangeSlide}) {
    if (selected === 0) {
        return (
            <div className=''>
                 <video autoPlay muted loop className='video'>
                    <source src={slides[selected].videoUrl}></source>
                </video>
                <div className='slide-content flex flex-col h-full w-full justify-center items-center'>
                    <h2 className='uppercase text-2xl font-bold'>{slides[selected].header}</h2>
                    <p>{slides[selected].content.txt[0]}</p>
                </div> 
                <div className='absolute bottom-0 flex justify-center w-full pb-4'>
                    <BiChevronDown className='icon-down cursor-pointer' onClick={onChangeSlide}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <img src="/images/earth.jpg" className='image' alt="" srcset="" />
            </div>
        )
    }
}
