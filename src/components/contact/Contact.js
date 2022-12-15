import React from 'react';
import {Button, Container, Divider, Grid, Typography} from "@material-ui/core";
import {Place} from '@material-ui/icons';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import {Avatar} from "@mui/material";
import useStyle from "../header/Style";

const Contact = () => {
    const classes = useStyle();
    return (<Container maxWidth={"md"}>
        <Grid container>
            <Grid item xs={12} className={"d-flex row justify-content-center text-center my-5"}>
                <h1 className={"py-2 mb-4"}>با ما در تماس باشید</h1>
                <Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                    مورد
                    نیاز و کاربردهای متنوع با هدف بهبود</Typography>
            </Grid>
            <Grid item lg={4} xs={12} className={"my-3"}>
                <div
                    className={"mx-3 py-5 bg-light rounded d-flex row justify-content-center align-content-center h-100 text-center"}>

                    <Avatar className={"my-3"}><Place/></Avatar>
                    <Typography>خیابان آزادی نبش شادمان پلاک ۵</Typography>
                    <Typography component={"p"} className={"opacity-75"}>لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است</Typography>
                </div>
            </Grid>
            <Grid item lg={4} xs={12} className={"my-3"}>
                <div
                    className={"mx-3  py-5 bg-light rounded d-flex row justify-content-center align-content-center h-100 text-center"}>
                    <Avatar className={"my-3"}><WifiCalling3Icon/></Avatar>
                    <Typography>۲۱۶۶۸۸۹۹۷۷+</Typography>
                    <Typography component={"p"} className={"opacity-75"}>لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است</Typography>
                </div>

            </Grid>
            <Grid item lg={4} xs={12} className={"my-3 "}>
                <div
                    className={"mx-3 py-5 bg-light rounded d-flex row justify-content-center align-content-center h-100 text-center"}>
                    <Avatar className={"my-3"}> <MailOutlineIcon/></Avatar>
                    <Typography>info@example.com</Typography>
                    <Typography component={"p"} className={"opacity-75"}>لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است</Typography>
                </div>

            </Grid>
            <Grid item xs={12} className={"bg-white rounded d-flex row justify-content-center shadow text-center my-5"}>
                <Container maxWidth={"sm"} className={"mb-5"}>
                    <div className={"my-5"}>
                        <h1 className={"py-2 mb-4"}>ارسال پیام</h1>
                        <Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک
                            است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی
                            مورد
                            نیاز و کاربردهای متنوع با هدف بهبود</Typography>
                    </div>
                    <div>
                        <Divider className={classes.Divider}/>
                    </div>
                    <Grid container className={"d-flex row justify-content-around"}>
                        <Grid item sm={6} xs={12} className={"d-flex row w-100 justify-content-start p-3"}>
                            <label>
                                        <span className={"d-flex justify-content-start"}>
                                        *نام شما
                                        </span>
                            </label>
                            <input className={"border-0 bg-light rounded py-2"} name={"name"}/>
                        </Grid>
                        <Grid item sm={6} xs={12} className={"d-flex row w-100 justify-content-start p-3"}>
                            <label>
                                        <span className={"d-flex justify-content-start"}>

                                        *ایمیل شما
                                        </span>
                            </label>
                            <input className={"border-0 bg-light rounded py-2"} name={"email"}/>
                        </Grid>
                        <Grid item xs={12} className={"d-flex row w-100 justify-content-start p-3"}>
                            <label>
                                    <span className={"d-flex justify-content-start"}>
                                    *موضوع
                                    </span>
                            </label>
                            <input className={"border-0 bg-light rounded py-2"}/>
                        </Grid>
                        <Grid item xs={12} className={"d-flex row w-100 justify-content-start p-3"}>
                            <label>
                                    <span className={"d-flex justify-content-start"}>
                                    *پیام شما
                                    </span>
                            </label>
                            <textarea className={"border-0 bg-light rounded  py-2"}/>
                        </Grid>
                    </Grid>
                    <Button color={"primary"} variant={"contained"} className={"my-4"}>ارسال پیام</Button>
                </Container>
            </Grid>

        </Grid>
    </Container>);
};

export default Contact;