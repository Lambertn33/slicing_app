import React, { useState } from 'react'
import Slide from './Slide'
import './slides.css'

export default function Slides({slides, selected, changeSlide}) {

  return (
    <Slide
      selected = {selected}
      slides={slides}
      onChangeSlide = {changeSlide}  
    />
  )
}
