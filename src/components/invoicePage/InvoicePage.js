import React from 'react';
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import {Button} from "@mui/material";
import useStyle from "../header/Style";
import TableInvoicePage from "./TableInvoicePage";
import {useSelector} from "react-redux";

const InvoicePage = () => {
    const classes =useStyle();
    const shopList=useSelector(state => state.shopListReducers.listShop)
    let complement1=0;
    shopList.map(item=>{complement1+=(item.price * item.number)})
    let complement2=0;
    shopList.map(item=>{complement2+=(item.price2 * item.number)})
    return (
        <Container>
            <Grid container xs={12} className={"my-5"}>
                <Grid item lg={8} xs={12} className={"px-2"}>
                    <TableInvoicePage/>
                    <div className={"d-flex justify-content-between my-3"}>
                        <div>
                            <input className={"border-0 bg-light p-2 mx-2"} placeholder={"کد کوپن خود را وارد کنید..."}/>
                            <Button color={"primary"} variant={"contained"}>اعمال کوپن</Button>
                        </div>
                        <Button color={"primary"} disabled variant={"contained"}>بروز رسانی سبد خرید</Button>
                    </div>
                </Grid>
                <Grid item lg={4} xs={12} className={"d-flex row border "}>
                    <h2 className={"my-3"}>جمع کل سبد خرید</h2>
                    <div>
                        <Divider className={classes.Divider}/>
                    </div>
                    <div className={"d-flex justify-content-between my-3 px-3"}>
                        <Typography>جمع جزء</Typography>
                        <Typography>{complement1} تومان</Typography>
                    </div>
                    <div className={"d-flex justify-content-between my-3 px-3"}>
                        <Typography>تخفیف</Typography>
                        <Typography>{complement1 - complement2} تومان</Typography>
                    </div>
                    <div>
                        <Divider className={classes.Divider}/>
                    </div>
                    <div className={"d-flex justify-content-between fw-bold my-3 px-3"}>
                        <Typography className={"fw-bold"}>مجموع</Typography>
                        <Typography className={"fw-bold"}>{complement2} تومان</Typography>
                    </div>
                    <Button color={"error"} variant={"contained"} >ادامه جهت تسویه حساب</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InvoicePage;