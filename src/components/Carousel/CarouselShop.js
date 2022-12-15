import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const responsive = {
    0: {
        items: 1
    },
    900: {
        items: 1
    },
    1200: {
        items: 1
    }}
const CarouselShop = () => {

    return (
        <div>
            <AliceCarousel
                           autoPlay={true}
                           startIndex = {0}
                           fadeOutAnimation={true}
                           mouseDragEnabled={true}
                           playButtonEnabled={true}
                           autoPlayInterval={4000}
                           autoPlayActionDisabled={true}

                           mouseTracking={true}
                           disableDotsControls={true}
                            // touchTracking={true}
                           // touchMoveDefaultEvents={true}
                           responsive={responsive}
                 >
                <div className="yours-custom-class" style={{height:"80vh",background:"url(/images/11.jpg)",backgroundSize:"cover"}} />
                <div className="yours-custom-class" style={{height:"80vh",background:"url(/images/22.jpg)",backgroundSize:"cover"}} />
                {/*<div className="yours-custom-class" style={{height:"80vh",background:"url(/images/3.jpg)",backgroundSize:"cover"}} />*/}
                {/*<div className="yours-custom-class" style={{height:"80vh",background:"url(/images/4.jpg)",backgroundSize:"cover"}} />*/}
                {/*<div className="yours-custom-class" style={{height:"80vh",background:"url(/images/5.jpg)",backgroundSize:"cover"}} />*/}
            </AliceCarousel>
        </div>
    );
};

export default CarouselShop;