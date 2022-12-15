import React from 'react';
import {Box, Button, Rating, SpeedDial, Link, Backdrop, CircularProgress, Dialog} from "@mui/material";
import {Avatar,  Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import FullPageProduct from "../FullPageProduct/FullPageProduct";
import {useDispatch} from "react-redux";
import { AddListFavorites, AddListShopList} from "../../redux";

const CardShop = ({image,title,price,price2,existence,discount,star,color,isDiscount,number,category,id}) => {
    const data={image,title,price,price2,existence,discount,star,color,isDiscount,number,id,category};
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch=useDispatch();
    return (
        <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
            {isDiscount && <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{position: 'fixed', top: 16, right: 16}}
                icon={discount}/>
            }
            <Card elevation={3} className={"m-2  "} style={{direction:"rtl"}}>

                <CardMedia
                    component="img"
                    alt="green iguana"

                    image={image}
                />
                <CardContent className={"d-flex justify-content-end row"} >
                    <h5 className={"text-dark  d-inline-flex"}>{title}</h5>
                    <div className={"d-flex  align-items-center"}>
                        <Typography
                            className={"text-decoration-line-through opacity-50 m-2"}> {price}
                            تومان </Typography>
                        <Typography className={"text-success m-2 fw-bold"}> {price2}
                            تومان </Typography>
                    </div>
                    <Typography className={"d-inline-flex"}>{existence===0?("ناموجود در انبار"):("موجود در انبار")}</Typography>
                    <Rating className={"d-inline-flex"} name="read-only" value={star} readOnly/>
                    <Typography className={"d-inline-flex"}>تعداد موجود :{existence}</Typography>

                </CardContent>
                <CardActions className={"d-flex justify-content-evenly"}>
                    <Button variant="contained" color={color} size="small" onClick={()=>{dispatch(AddListShopList(data))}}>افزودن به سبد خرید</Button>
                    <Link  type={'button'} onClick={()=>{dispatch(AddListFavorites(data))}}><Avatar><FavoriteBorderIcon/></Avatar></Link>
                    <Link  type={'button'} onClick={handleClickOpen}><Avatar><OpenInFullIcon/></Avatar></Link>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={"lg"}
            >
                <FullPageProduct image={image} price={price} price2={price2} category={category} color={color} number={number}
                                 title={title} discount={discount} existence={existence} star={star} isDiscount={isDiscount} id={id}  text={"این یک متن ازمایشی است و کاربرد دیگری ندارد این یک متن ازمایشی است و کاربرد دیگری ندارد این یک متن ازمایشی است و کاربرد دیگری ندارد"}/>
            </Dialog>
        </Box>
    );
};

export default CardShop;