import React from 'react';

import {Button, Checkbox, Container, Grid, Link, Typography} from "@mui/material";

const MyAccount = () => {
    return (
        <Container maxWidth={"lg"}>
            <Grid container xs={12}>
                <Grid  item sm={6} xs={12} spacing={8} className={"p-3"} >
                    <h3 className={"mb-3"}>ورود</h3>
                    <Typography>* نام کاربری یا آدرس ایمیل</Typography>
                    <input className={"border-0  rounded bg-light p-3 w-100"}/>
                    <Typography>* گذرواژه</Typography>
                    <input className={"border-0 rounded bg-light p-3 w-100"}/>
                    <div>
                        <Checkbox />
                        <Typography className={"d-inline"}>مرا به یاد بسپار</Typography>
                    </div>
                    <Button color={"primary"} variant={"contained"} className={"my-3"}>ورود</Button>
                    <Link href={"#"} className={" d-block"}>گذرواژه خود را فراموش کرده اید؟</Link>
                </Grid>
                <Grid  item sm={6} xs={12} spacing={8} className={"p-3"}>
                    <h3 className={"mb-3"}>عضویت</h3>
                    <Typography>* ادرس ایمیل</Typography>
                    <input className={"border-0 rounded bg-light p-3 w-100"}/>
                    <Typography>* گذرواژه</Typography>
                    <input className={"border-0 rounded bg-light p-3 w-100"}/>
                    <Button color={"primary"} variant={"contained"} className={"my-3"}>عضویت</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyAccount;