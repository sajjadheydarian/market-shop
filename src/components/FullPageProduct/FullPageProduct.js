import React from 'react';
import {Box, Button, Container, Grid, Link, Paper, Rating, SpeedDial, useMediaQuery, useTheme} from "@mui/material";
import {Avatar, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useDispatch} from "react-redux";
import { AddListFavorites, AddListShopList} from "../../redux";

const FullPageProduct = ({image, text, title, id, price, price2, existence, discount, star, color, isDiscount,number,category}) => {
    const data={image, text, title, id, price, price2, existence, discount, star, color, isDiscount,number,category}
    const dispatch=useDispatch();
    return (
        <Container>
            <Box sx={{transform: 'translateZ(0px)', flexGrow: 1,py:3}}>
                <Paper  elevation={0}>
                <Grid container xs={12} sx={{py:2,direction:"rtl"}}>
                    <Grid item lg={4} xs={12} sx={{minHeight:"250px"}} className={"d-flex justify-content-center"}>
                        <div className={" h-100"} style={{background: `url(${image})`, backgroundSize: "cover",maxWidth:"300px",minWidth:"275px"}}>
                            {isDiscount && <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{position: 'fixed', top: 16, right: 16}}
                                icon={discount}/>
                            }
                        </div>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <Card elevation={0}  style={{direction: "rtl"}}>
                            <CardContent className={"d-flex justify-content-end row"}>
                                <h2 className={"text-dark  d-inline-flex mb-2"}>{title}</h2>
                                <h6 className={"text-dark  d-inline-flex my-2"}>
                                    {text}
                                </h6>
                                <div className={"d-flex  align-items-center"}>
                                    <Typography
                                        className={"text-decoration-line-through opacity-50 m-2"}> {price}
                                        تومان </Typography>
                                    <Typography className={"text-success m-2 fw-bold"}> {price2}
                                        تومان </Typography>
                                </div>
                                <Typography
                                    className={"d-inline-flex"}>{existence === 0 ? ("ناموجود در انبار") : ("موجود در انبار")}</Typography>
                                <Rating className={"d-inline-flex"} name="read-only" value={star} readOnly/>
                                <Typography className={"d-inline-flex"}>تعداد موجود :{existence}</Typography>

                            </CardContent>
                            <CardActions className={"d-flex justify-content-evenly"}>
                                <Button variant="contained" color={color}  className={" w-50 mx-2 h-100 py-2 "} onClick={()=>{dispatch(AddListShopList(data))}}>افزودن به سبد خرید</Button>
                                <Button variant={"contained"} color={"inherit"} size={"small"} className={"d-flex justify-content-center w-50 mx-2 opacity-75"} onClick={()=>{dispatch(AddListFavorites(data))}}><Avatar><FavoriteBorderIcon/></Avatar><Typography className={"px-2"}>علاقه مند</Typography></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                </Paper>
            </Box>
        </Container>
    );
};

export default FullPageProduct;