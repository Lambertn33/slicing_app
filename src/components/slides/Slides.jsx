import React, { useState } from 'react'
import { BiMinus } from "react-icons/bi";
import Slide from './Slide'
import './slides.css'

export default function Slides({slides, selected, changeSlide}) {
  let classes = 'slide-indicator cursor-pointer';
  let activeClasses = classes + ' active';
  return (
    <div className=''>
      <Slide
        selected = {selected}
        slides={slides}
        onChangeSlide = {changeSlide}  
      />
      <div className='absolute right-0 top-1/2'>
         <BiMinus className={selected === 0 ? activeClasses : `${classes} dark`} onClick={()=>changeSlide(0)}/>
         <BiMinus className={selected === 1 ? activeClasses : classes} onClick={()=>changeSlide(1)}/>
      </div>
    </div>
  )
}
