import React from 'react';
import ItemWeblog from "./ItemWeblog";
import {Container, Grid, Link} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Email, Facebook, Instagram, Twitter} from "@material-ui/icons";

const FamousPosts=[
    {
        id:0,
        text:"اما من باید برای شما توضیح دهم که چگونه این ایده اشتباه است",
        image:"/images/web1.jpg"
    },
    {
        id:1,
        text:"مشکل با حروف چاپی در وب",
        image:"/images/web2.jpg"
    },
    {
        id:2,
        text:"صبحانه انگلیسی با املت استوایی",
        image:"/images/web3.jpg"
    },

]
const newTexts=[
    {
        id:0,
        text:"اما من باید برای شما توضیح دهم که چگونه این ایده اشتباه است"
    },
    {
        id:1,
        text:"مشکل با حروف چاپی در وب"
    },
    {
        id:2,
        text:"صبحانه انگلیسی با املت استوایی"
    },
    {
        id:3,
        text:"در طرف دیگر صحبت با مدیر عامل"
    },

]
const ListItemWeblog=[
    {
        id:0,
        image:"images/web1.jpg",
        subject:"تمفارست, غذا, فروشگاه",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه",
        date:" اردیبهشت ۱۴۰۰",
        category:"نکات و ترفند ها",
        title:"اما من باید برای شما توضیح دهم که چگونه این ایده اشتباه است"
    },
    {
        id:1,
        image:"images/web2.jpg",
        subject:"تمفارست, غذا, فروشگاه",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه",
        date:" اردیبهشت ۱۴۰۰",
        category:"نکات و ترفند ها",
        title:"مشکل با حروف چاپی در وب"
    },
    {
        id:2,
        image:"images/web3.jpg",
        subject:"تمفارست, غذا, فروشگاه",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه",
        date:" اردیبهشت ۱۴۰۰",
        category:"نکات و ترفند ها",
        title:"صبحانه انگلیسی با املت استوایی"
    },
    {
        id:3,
        image:"images/web4.jpg",
        subject:"تمفارست, غذا, فروشگاه",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه",
        date:" اردیبهشت ۱۴۰۰",
        category:"نکات و ترفند ها",
        title:"در طرف دیگر صحبت با مدیر عامل"
    },

]
const Weblog = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} lg={3} className={"px-2"}>
                    <div className={"bg-light rounded d-flex justify-content-between align-items-center my-4 px-2"}>
                        <input className={"border-0 bg-light p-2 "} style={{outline:"none"}} placeholder={"جستجو..."}/>
                        <a className="btn btn-outline-light btn-floating text-dark m-1" href="#" role="button">
                            <SearchIcon/>
                        </a>
                    </div>
                    <div className={"my-4"}>
                        <h4>نوشته‌های تازه</h4>
                        <ul className={"list-unstyled"}>
                            {
                                newTexts.map(item=>{
                                    return(
                                        <li className={"my-3"}><Link className={"text-decoration-none"}  href={"#"}>{item.text}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={"my-4"}>
                        <h4>پست های مشهور</h4>
                        <div className={"rounded border p-2"}>
                            {
                                FamousPosts.map(item=>{
                                    return(
                                        <div className={"d-flex  align-items-center my-2"}>
                                            <img src={item.image} style={{height:"60px",width:"60px",borderRadius:"50%"}}/>
                                            <p className={"fw-bold px-2"}>{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={"my-4"}>
                        <h4>شبکه های اجتماعی</h4>
                        <div className="mb-4">
                            <a className="btn btn-outline-light btn-floating btn-dark m-1" href="#" role="button">
                                <Facebook/>
                            </a>
                            <a className="btn btn-outline-light btn-floating btn-dark m-1" href="#" role="button">
                                <Twitter/>
                            </a>
                            <a className="btn btn-outline-light btn-floating btn-dark m-1" href="#" role="button">
                                <Email/>
                            </a>
                            <a className="btn btn-outline-light btn-floating btn-dark m-1" href="#" role="button">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={9} className={"px-2"}>
                    {
                        ListItemWeblog.map(item=>{
                            return(
                                <ItemWeblog image={item.image} subject={item.subject}
                                            text={item.text}
                                            id={item.image} date={item.date}
                                            title={item.title}
                                            category={item.category}/>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Weblog;