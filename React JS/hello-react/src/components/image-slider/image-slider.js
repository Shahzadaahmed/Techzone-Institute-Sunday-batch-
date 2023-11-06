// Note: ImageSlider component...!

import React, { useEffect, useState } from 'react';

import Img_1 from "./images/cartoon-1.jpg";
import Img_2 from "./images/cartoon-2.jpg";
import Img_3 from "./images/cartoon-3.jpg";
import Img_4 from "./images/cartoon-4.jpg";
import Img_5 from "./images/cartoon-5.png";

const ImageSlider = () => {

    // Note: Handeling states here...!
    const [slides, setSlides] = useState([
        Img_1,
        Img_2,
        Img_3,
        Img_4,
        Img_5
    ]);
    const [initialPoint, setInitialPoint] = useState(0);

    const slidesHandler = () => {
        let init = initialPoint;
        init = init + 1;
        setInitialPoint(init);

        if (init == slides.length) {
            init = 0;
            setInitialPoint(init);
        };
    };

    useEffect(() => {
        setTimeout(() => {
            slidesHandler();
        }, 2000);
    }, [initialPoint]);

    return (
        <>
            <h1> Image Slider in React JS </h1>

            <img
                src={slides[initialPoint]}
                height={'500px'}
                width={'50%'}
            />
        </>
    );
};

export default ImageSlider;