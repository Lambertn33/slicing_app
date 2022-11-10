import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './slides.css'

export default function Slide({selected, slides, onChangeSlide}) {
    const animationStyles = {
        bounce: {
          animation: 'infinite 5s',
          animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
    }

    if (selected === 0) {
        return (
            <StyleRoot>
                <div className=''>
                    <video autoPlay muted loop className='video'>
                        <source src={slides[selected].videoUrl}></source>
                    </video>
                    <div className='slide-content flex flex-col gap-4 h-full w-full justify-center items-center' style={animationStyles.fadeIn}>
                        <h2 className='uppercase text-4xl font-bold'>{slides[selected].header}</h2>
                        <p className='text-lg'>{slides[selected].content.txt[0]}</p>
                    </div> 
                    <div className='absolute bottom-0 flex justify-center w-full pb-4'>
                        <BiChevronDown className='icon-down cursor-pointer' onClick={() => onChangeSlide(1)}/>
                    </div>
                </div>
            </StyleRoot>
        )
    } else {
        const {header, content} = slides[selected];
        return (
            <div style={animationStyles.fadeIn}>
                <StyleRoot>
                    <img src="/images/earth.jpg" className='image' alt="" srcSet="" />
                        <div className='w-full right-16 top-1/3 sm:w-1/4 md:w-1/4 absolute flex flex-col gap-4'>
                            <h1 className='text-white uppercase text-3xl'>{header}</h1>
                            <Carousel>
                                {
                                    Object.values(content.txt).map((content, i) => (
                                        <div className='border py-16 px-4 carousel-element'>
                                            <h1 className='text-2xl font-semibold'>Lorem Ipsum {++i}</h1>
                                            <p>{content}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                </StyleRoot>
            </div>
        )
    }
}
