import React, {useState} from 'react'
import {useQuery} from 'react-query';
import * as dataService from '../../services/dataService';
import Slides from './Slides'
import Navbar from './Navbar'
import './slides.css'

export default function Home() {
    const [links, setLinks] = useState([]);
    const [slides, setSlides] = useState([]);
    const [selected, setSelected] = useState(0);
    const { isLoaading: isLinksFetching, isSuccess: isLinksSuccess,  isError: isLinksFetchingError } = useQuery('links', dataService.getLinks, {
      onSuccess: links => {
        setLinks(links);
      }
    });
    const { isLoaading: isSlidesFetching, isSuccess: isSlidesSuccess,  isError: isSlidesFetchingError } = useQuery('slides', dataService.getSlides, {
      onSuccess: slides => {
        setSlides(slides);
      }
    });

    const handleChangeSlide = (slide) => {
      setSelected(slide);
    }

   if (isSlidesFetching || isLinksFetching) {
        return (
            <h2>Loading..</h2>
        )
   } else if (isLinksSuccess && isSlidesSuccess) {
        return (
            <div className=''>
                <Navbar
                 links = {links}
                 selected={selected} />

                <Slides
                 slides = {slides}
                 selected={selected} 
                 changeSlide={handleChangeSlide} />
            </div>
        )
   }
}
