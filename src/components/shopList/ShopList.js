import React from 'react';
import {ImageList, useMediaQuery, useTheme} from "@mui/material";
import CardShop from "../card/CardShop";
import { useSelector} from "react-redux";

const ShopList = ({col=5,list,numberOf}) => {
    const listShop=useSelector(state=>state.ShopReducers.shop);
    let ListCardShop;
    if (list){
        ListCardShop=list;
    }else {
        ListCardShop=listShop.filter(item=>item.id<12)
    }
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));
    const isLaptopSize = useMediaQuery(theme.breakpoints.down('lg'));
    return (
            <ImageList variant="woven" cols={isPhoneSize?1:(isTabletSize?2:isLaptopSize?3:col)} gap={2} className={"p-3 "} style={{overflow:"hidden"}} >
                {
                    ListCardShop.map((item)=>{
                        return(
                            <CardShop image={item.image} price={item.price} price2={item.price2}
                                      title={item.title} discount={item.discount} existence={item.existence} star={item.star}
                                      isDiscount={item.isDiscount} id={item.id} number={item.number} category={item.category} color={item.color}/>
                        )
                    })
                }
            </ImageList>
    );
};

export default ShopList;