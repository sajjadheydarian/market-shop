import React from 'react';
import {Typography} from "@material-ui/core";
import {Button} from "@mui/material";

const Banner = ({image,title,discount,color}) => {
    return (
        <div className={"d-flex align-items-center row p-3"} style={{
            background: `url(${image})`,
            height: "260px",
            backgroundSize: "cover",
            borderRadius: "10px"
        }}>
            <Typography color={"error"}>{discount}% تخفیف اخر هفته</Typography>
            <h3 className={"w-50"}>{title}</h3>
            <Typography>تخفیف اخر هفته</Typography>
            <Button className={"w-50 mx-2"} variant={"contained"} color={color}>همین الان خرید
                کنید</Button>
        </div>
    );
};

export default Banner;