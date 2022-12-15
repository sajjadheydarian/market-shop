import React from 'react';
import {Container, Typography} from "@material-ui/core";
import {Box, Rating, SpeedDial} from "@mui/material";
import {Link} from "react-router-dom";

const CardSideBar = ({image, title, price, price2, existence, discount, star, isDiscount, percent}) => {
    return (
        <Container>
            <Link to={"/"}
                  className={"d-flex align-items-center justify-content-center border row text-center  border-2 border-danger text-decoration-none"}>
                <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
                    {isDiscount && <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{position: 'fixed', top: 16, right: 16}}
                        icon={discount}/>
                    }
                    <img src={image} style={{width: "250px"}}/>
                    <div className={"d-flex justify-content-center  align-items-center"}>
                        <Typography
                            className={"text-decoration-line-through opacity-50 m-2"}> {price}
                            تومان </Typography>
                        <Typography className={"text-success m-2 fw-bold"}> {price2}
                            تومان </Typography>
                    </div>
                    <h5 className={"text-dark"}>{title}</h5>
                    <Typography>{existence === 0 ? ("ناموجود در انبار") : ("موجود در انبار")}</Typography>
                    <Rating name="read-only" value={star} readOnly/>
                    <Typography>تعداد موجود :{existence}</Typography>
                    <div className="progress my-4">
                        <div className="progress-bar bg-warning " style={{width: percent}}/>
                    </div>
                </Box>
            </Link>
        </Container>
    );
};

export default CardSideBar;