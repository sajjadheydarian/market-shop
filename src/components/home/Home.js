import React from 'react';
import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import {
    ImageList,
    Button, useTheme, useMediaQuery, Dialog
} from "@mui/material";
import CardShop from "../card/CardShop";
import ShopList from "../shopList/ShopList";
import Banner from "../banner/Banner";
import BannerWeblog from "../banner/BannerWeblog";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CarouselProduct from "../CarouselProduct/CarouselProduct";
import CarouselShop from "../Carousel/CarouselShop";
import ItemTable from "./components/ItemTable";
import CardSideBar from "./components/CardSideBar";
import BigItemTable from "./components/BigItemTable";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import FullPageProduct from "../FullPageProduct/FullPageProduct";

const listItemTable = [
    {
        id: 0,
        title: "مواد خوراکی",
        image: "/images/a1.png",
        address: "/",
        number: 10
    },
    {
        id: 1,
        title: "مواد خوراکی",
        image: "/images/a2.jpg",
        address: "/",
        number: 36
    },
    {
        id: 2,
        title: "مواد خوراکی",
        image: "/images/a3.png",
        address: "/",
        number: 10
    },
    {
        id: 3,
        title: "مواد خوراکی",
        image: "/images/a4.jpg",
        address: "/",
        number: 12
    },
    {
        id: 4,
        title: "مواد خوراکی",
        image: "/images/a5.jpg",
        address: "/",
        number: 45
    },
    {
        id: 5,
        title: "مواد خوراکی",
        image: "/images/a6.jpg",
        address: "/",
        number: 35
    },
    {
        id: 6,
        title: "مواد خوراکی",
        image: "/images/a7.jpg",
        address: "/",
        number: 23
    },
    {
        id: 7,
        title: "مواد خوراکی",
        image: "/images/a8.jpg",
        address: "/",
        number: 20
    }
]
const BannerWeb = [
    {
        id: 0,
        image: "/images/q3.jpg",
        title: "اما من باید برای شما توضیح دهم که چگونه این ایده اشتباه است",
        category: "نکات و ترفند ها",
        Description: "۱۳ اردیبهشت ۱۴۰۱ - " + "۳ نظرات - " + "توسط سجاد حیدریان"
    },
    {
        id: 1,
        image: "/images/q2.jpg",
        title: "مشکل با حروف چاپی در وب",
        category: "فروشگاهی",
        Description: "۱۳ اردیبهشت ۱۴۰۱ - " + "۳ نظرات - " + "توسط سجاد حیدریان"
    },
    {
        id: 2,
        image: "/images/q1.jpg",
        title: "صبحانه انگلیسی با املت استوایی",
        category: "فروشگاهی",
        Description: "۱۳ اردیبهشت ۱۴۰۱ - " + "۳ نظرات - " + "توسط سجاد حیدریان"
    },
]
const Home = () => {
    const listShop1=useSelector(state=>state.ShopReducers.shop)
    const ListCardShop=listShop1.filter(item=>item.id<6);
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={"p-3"}>
            <CarouselShop/>
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={3}>
                        <BigItemTable title={"بیسکوییت"} image={"/images/a5.jpg"} number={8} address={"/"}/>
                    </Grid>
                    <Grid container lg={9} xs={12}>
                        <Grid container>
                            {
                                listItemTable.map(item => {
                                    return (
                                        <ItemTable title={item.title} image={item.image} address={item.address}
                                                   number={item.number} />
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={"my-4"}>
                        <Grid item lg={4}>
                            <Link to={"#"} className={"text-decoration-none"} onClick={handleClickOpen}><CardSideBar image={"/images/s1.jpg"} price={"56,500"} price2={"29,500"}
                                         title={"مرغ های پخته شده"} discount={"21%"} isDiscount={true} star={4}
                                               existence={25} percent={"20%"}/></Link>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                fullWidth={true}
                                maxWidth={"lg"}
                            >
                                <FullPageProduct image={"/images/s1.jpg"} price={'56500'} price2={"29500"} category={"meat"}  number={0}
                                                 title={"مرغ های پخته شده"} discount={"21%"} existence={25} star={4} isDiscount={true} id={100}   text={"این یک متن ازمایشی است و کاربرد دیگری ندارد این یک متن ازمایشی است و کاربرد دیگری ندارد این یک متن ازمایشی است و کاربرد دیگری ندارد"}/>
                            </Dialog>
                        </Grid>
                        <Grid item lg={8}>
                            <Container>
                                <ImageList variant="woven" cols={isPhoneSize ? 1 : (isTabletSize ? 2 : 3)} gap={2}
                                           className={"p-3"}>
                                    {
                                        ListCardShop.map((item) => {
                                            return (
                                                <CardShop image={item.image} price={item.price} price2={item.price2}
                                                          title={item.title} discount={item.discount}
                                                          existence={item.existence} star={item.star} color={item.color}
                                                          isDiscount={item.isDiscount} number={item.number} id={item.id} category={item.category}/>
                                            )
                                        })
                                    }
                                </ImageList>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item lg={6}>
                            <Container className={"p-3"}>
                                <Banner discount={"45"} title={"کلوچه و بستنی"} image={"/images/d1.jpg"}/>
                            </Container>
                        </Grid>
                        <Grid item lg={6}>
                            <Container className={"p-3"}>
                                <Banner discount={"20"} title={"کلوچه و بستنی"} image={"/images/d2.jpg"}
                                        color={"error"}/>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div
                            className={"bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center my-5 py-2 "}
                            style={{borderRadius: "10px"}}>
                            <Typography>در هر سفارش خودکار ۵-۱۰٪ اضافی پس انداز کنید!</Typography>
                        </div>
                    </Grid>
                    <Grid container xs={12} className={"d-flex align-items-center justify-content-between"}>
                        <div>
                            <h5>بهترین فروشندگان</h5>
                            <Typography className={"fw-bold text-primary opacity-75"}>پیشنهادات فعلی را تا پایان ماه از
                                دست
                                ندهید.</Typography>
                        </div>
                        <Button variant={"outlined"}>مشاهده همه<KeyboardBackspaceIcon/></Button>
                    </Grid>
                    <Grid container xs={12}>
                        <CarouselProduct/>
                    </Grid>
                    <Grid item xs={12}>
                        <ShopList col={4}/>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item lg={4}>
                            <Container className={"p-2 px-4"}>
                                <Banner discount={"25"} title={"تخم مرغ طبیعی"} color={"secondary"}
                                        image={"/images/f3.jpg"}/>
                            </Container>
                        </Grid>
                        <Grid item lg={4}>
                            <Container className={"p-2 px-4"}>
                                <Banner discount={"21"} title={"بهترین ها رو بچشید"} color={"secondary"}
                                        image={"/images/f2.jpg"}/>
                            </Container>
                        </Grid>
                        <Grid item lg={4}>
                            <Container className={"p-2 px-4"}>
                                <Banner discount={"30"} title={"تنقلات مضر را حذف کنید"} color={"secondary"}
                                        image={"/images/f1.jpg"}/>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        {
                            BannerWeb.map(item => {
                                return (
                                    <Grid item lg={4}>
                                        <Link to={"/Weblog"} className={"text-decoration-none"}><BannerWeblog
                                            image={item.image} Category={item.category}
                                            title={item.title} Description={item.Description}/></Link>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
