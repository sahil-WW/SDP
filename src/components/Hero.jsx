import React from 'react'
import EmblaCarousel from './EmblaCarousel'


const Hero = () => {
    const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

return (
<>
<EmblaCarousel slides={SLIDES} options={OPTIONS} />
</>
);
}


export default Hero;