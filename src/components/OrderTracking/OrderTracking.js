import React from 'react';
import {Button, Typography} from "@material-ui/core";

const OrderTracking = () => {
    return (
        <form className={" d-flex row align-content-around p-5 m-0"} style={{height:"600px"}}>
            <Typography  style={{fontSize:"x-large"}}>برای پیگیری سفارش، لطفا شماره سفارش و آدرس ایمیل خود را در کادرهای زیر وارد کرده و دکمه پیگیری را فشار دهید. شماره سفارش از طریق رسید و ایمیلی که به شما ارسال شده در اختیارتان قرار گرفته است.</Typography>
            <label>شناسه سفارش (ID):</label>
            <input className={"bg-light border-0 py-4 rounded"} placeholder={"شماره سفارش در ایمیل ارسال شده برای شما موجود است"} name={"number"}/>
            <label>ایمیل صورتحساب:</label>
            <input className={"bg-light border-0 py-4 rounded"} placeholder={"ایمیلی که در هنگام ثبت سفارش وارد کردید"} name={"email"}/>
            <div className={"d-flex justify-content-end"}>
                <Button className={" px-4 py-3"} variant={"contained"} color={"primary"} type={"submit"}>پیگیری</Button>
            </div>
        </form>
    );
};

export default OrderTracking;