import React from 'react';
import AliceCarousel from "react-alice-carousel";
import CardShop from "../card/CardShop";
import {useSelector} from "react-redux";

const responsive = {
    0: {
        items: 1
    },
    400: {
        items: 2
    },
    900:{
        items:3
    },
    1200: {
        items: 5
    }}
const CarouselProduct = () => {
    const listShop1=useSelector(state=>state.ShopReducers.shop)
    const ListCardShop=listShop1.filter(item=>item.id<18);
    return (
        <div className={"w-100 "} >
            <AliceCarousel
                autoPlay={true}
                startIndex = {0}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={true}
                autoPlayInterval={4000}
                autoPlayActionDisabled={true}
                disableButtonsControls={true}
                mouseTracking={true}
                // disableDotsControls={true}
                // touchTracking={true}
                // touchMoveDefaultEvents={true}
                responsive={responsive}
            >
                {
                    ListCardShop.map((item)=>{
                        return(
                            <CardShop image={item.image} price={item.price} price2={item.price2}
                                      title={item.title} discount={item.discount} existence={item.existence} star={item.star}
                                      isDiscount={item.isDiscount} color={"success"} number={item.number} id={item.id} category={item.category}/>
                        )
                    })
                }
            </AliceCarousel>
        </div>
    );
};

export default CarouselProduct;