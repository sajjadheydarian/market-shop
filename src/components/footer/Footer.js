import React from 'react';
import {Link, Avatar, Divider, IconButton, InputBase, Paper, Typography} from "@mui/material";
import {AttachEmail} from "@mui/icons-material";
import {Button, Grid} from "@mui/material";
import useStyle from "./Style";
import {Phone} from "@mui/icons-material";

const Footer = () => {
    return (
        <>
            <Grid style={{background: "#f7f8fd"}}>
                <Grid xs={12} className={"d-flex align-items-center  justify-content-evenly p-0 my-3"} style={{
                    background: "#233a95",
                    height: "300px",
                }}>
                    <Grid item lg={6} xs={12} className={"d-flex h-100 align-content-around px-3 row"}>
                        <Typography className={"text-light"}>۲۰ هزار تومان تخفیف برای اولین سفارش شما</Typography>
                        <h3 className={"text-light"}>به خبر نامه ما بپیوندید و ...</h3>
                        <Typography className={"text-light opacity-50 w-75"}>برای دریافت به روزرسانی درباره تبلیغات و
                            کوپن ها ، اکنون به اشتراک ایمیل ما بپیوندید.</Typography>
                        <Paper
                            component="form"
                            className={"d-flex align-items-center justify-content-between"}
                            sx={{
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "evenly"
                            }}
                        >
                            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                                <AttachEmail/>
                            </IconButton>
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="آدرس ایمیل شما"
                                name={"email"}
                            />

                            <IconButton sx={{p: '10px'}} aria-label="menu">
                                <Button variant={"contained"} color={"primary"}>عضویت</Button>
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} sx={{display: {md: 'block', xs: 'none'}}}>
                        <div className={"d-flex justify-content-center align-items-end h-100"}>
                            <img src={"/images/w1.png"}/>
                        </div>
                    </Grid>

                </Grid>
                <Grid container xs={12}>
                    <Divider className={"bg-dark my-2"} style={{height: "2px", width: "100%"}}/>
                </Grid>
                <Grid container xs={12} className={"px-4 py-5"}>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                    <Grid item xs={4} lg={2}>
                        <h5>میوه سبزیجات</h5>
                        <Typography className={"text-primary opacity-50"}>جوانه</Typography>
                        <Typography className={"text-primary opacity-50"}>میوه و سبزیجات</Typography>
                        <Typography className={"text-primary opacity-50"}>نوشیدنی ها</Typography>
                        <Typography className={"text-primary opacity-50"}>صبحانه و لبنیات</Typography>
                        <Typography className={"text-primary opacity-50"}>غذاهای منجمد</Typography>
                        <Typography className={"text-primary opacity-50"}>مواد غذایی و منگنه</Typography>
                        <Typography className={"text-primary opacity-50"}>بیسکویت و اسنک</Typography>
                        <Typography className={"text-primary opacity-50"}>نان و نانوایی</Typography>
                        <Typography className={"text-primary opacity-50"}>گوشت و غذاهای دریایی</Typography>
                        <Typography className={"text-primary opacity-50"}>نیازهای خانگی</Typography>
                        <Typography className={"text-primary opacity-50"}>بال بوفالوی ترد فاستر فارمز</Typography>
                        <Typography className={"text-primary opacity-50"}>بادام کم نمک بلو دایمند</Typography>
                        <Typography className={"text-primary opacity-50"}>بلوبری – بسته بندی ۱ پیمانه</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Divider className={"bg-dark my-2"} style={{height: "2px", width: "100%"}}/>
            </Grid>
            <Grid container xs={12} lg={12} className={"my-3 "}>
                <Grid item lg={3} xs={12} className={"d-flex align-items-center justify-content-center"}>
                    <Avatar className={"mx-2"}><Phone/></Avatar>
                    <div>
                        <Typography>۰۲۱-۵۵۸۵۹۶۴۵</Typography>
                        <Typography>ساعت کاری: ۸:۰۰ - ۲۲:۰۰</Typography>
                    </div>
                </Grid>
                <Grid item lg={4} xs={12} className={"d-flex row align-items-center justify-content-end h-100"}>
                    <Typography className={"fw-bold text-primary opacity-75"}>تمامی حقوق این سایت محفوظ است</Typography>
                    <Link href={"#"}> سیاست حفظ حریم خصوصی </Link>
                </Grid>
                <Grid item lg={5} sx={{display: {sm: 'block', xs: 'none'}}}>
                    <div className={"d-flex"}>
                        <div>
                            <h5>دانلود برنامه در تلفن همراه:</h5>
                            <Typography className={"fw-bold text-primary opacity-75"}>۱۵٪ تخفیف در اولین خرید
                                شما</Typography>
                        </div>
                        <img style={{height: "40px"}} src={"/images/e1.png"}/>
                        <img style={{height: "40px"}} src={"/images/e2.png"}/>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;