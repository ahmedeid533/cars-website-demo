import { useRef } from 'react'
import Slider from 'react-slick';

const SliderArrowsRef = () => {
    const sliderRef = useRef<Slider>(null);

    const handlePrev = () => {
        sliderRef.current && sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current && sliderRef.current.slickNext();
    };
    return { sliderRef, handleNext, handlePrev }
}

export default SliderArrowsRef