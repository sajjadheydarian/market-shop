import React from 'react';
import {
    Breadcrumbs, Button,
    Container, Divider,
    Grid,
    Typography
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import DownIcon from "@material-ui/icons/KeyboardArrowDown";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useStyle from "../header/Style";
import ShopList from "../shopList/ShopList";
import {Link, useParams} from "react-router-dom";
import SidebarFullPage from "./SidebarFullPage";
import {Menu, MenuItem} from "@mui/material";
import {useSelector} from "react-redux";

const handleClick = (event) => {
    console.log("click breadcrumb")
}
const FullPage = () => {
    let {page}=useParams();
    const listShop=useSelector(state => state.ShopReducers.shop);
    let cardShop;
    if (page==='shop'){
        cardShop=listShop;
    }else {
        cardShop=listShop.filter(item=>item.category==page)
    }
    const classes=useStyle();
    const [sort, setSort] = React.useState(null);
    const [textSort,setTextSort]=React.useState("مرتب سازی بر اساس آخرین");
    const openSort = Boolean(sort);
    const handleClickSort = (event) => {
        setSort(event.currentTarget);
    };
    const handleCloseSort = (event) => {
        setSort(null);
        setTextSort(event);
    };
    const [number, setNumber] = React.useState(null);
    const [textNumber,setTextNumber]=React.useState( 12);
    const openNumber = Boolean(number);
    const handleClickNumber = (event) => {
        setNumber(event.currentTarget);
    };
    const handleCloseNumber = (e) => {
        setNumber(null);
        setTextNumber(e);
    };
    const cardShopNumber=cardShop.filter((item,index)=>index<textNumber)
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} className={"mb-4  mt-2"}>
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb"
                                 separator={<NavigateBeforeIcon fontSize="small"/>}>
                        <Link className={"text-decoration-none"} color="inherit" to="/" onClick={handleClick}>
                            خانه
                        </Link>
                        <Link className={"text-decoration-none"} color="inherit" to="/FullPage/shop" onClick={handleClick}>
                            فروشگاه
                        </Link>
                        <Link className={"text-decoration-none"} color="inherit" to="#" onClick={handleClick}>
                            گوشت و ماهی
                        </Link>
                        <Typography color="textPrimary">گوشت گوسفندی</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <SidebarFullPage/>
                </Grid>
                <Grid container lg={9} xs={12} >
                    <Grid item xs={12} style={{background:"url(/images/r1.jpg)",borderRadius: "10px",height:"240px",backgroundSize:"cover"}}>

                    </Grid>
                    <Grid container xs={12} className={"bg-light w-100 rounded my-4"} style={{height:"50px"}} >
                        <Grid item lg={7} sx={12} className={"px-3 py-2"}>
                            <AppRegistrationIcon/>
                        </Grid>
                        <Grid item lg={3} sx={6} className={"py-2"}>
                            <Button id="sort-button"
                                    aria-controls={openSort ? 'sort-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openSort ? 'true' : undefined}
                                    onClick={handleClickSort} className={"fw-bold "}>{textSort}<DownIcon/> </Button>
                            <Menu
                                id="sort-menu"
                                anchorEl={sort}
                                open={openSort}
                                onClose={()=> {
                                    handleCloseSort(textSort)
                                }}
                                MenuListProps={{
                                    'aria-labelledby': 'sort-button',
                                }}
                            >
                                <MenuItem onClick={()=> {
                                    handleCloseSort("مرتب سازی براساس اخرین")
                                }}>مرتب سازی براساس اخرین</MenuItem>
                                <MenuItem onClick={(e)=> {
                                    handleCloseSort('مرتب سازی براساس محبوبیت')
                                }}>مرتب سازی براساس محبوبیت</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseSort('مرتب سازی براساس امتیاز')
                                }}>مرتب سازی براساس امتیاز</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseSort("مرتب سازی براساس گرانترین")
                                }}>مرتب سازی براساس گرانترین</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseSort("مرتب سازی براساس ارزانترین")
                                }}>مرتب سازی براساس ارزانترین</MenuItem>
                            </Menu>
                        </Grid>
                        <Grid item lg={2} sx={6} className={"d-flex py-2"}>
                            <Divider className={classes.Divider2}/>
                            <Button id="number-button"
                                    aria-controls={openNumber ? 'number-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openNumber ? 'true' : undefined}
                                    onClick={handleClickNumber}  className={"fw-bold "}>نمایش : {textNumber}<DownIcon/> </Button>
                            <Menu
                                id="number-menu"
                                anchorEl={number}
                                open={openNumber}
                                onClose={()=> {
                                    handleCloseNumber(textNumber)
                                }}
                                MenuListProps={{
                                    'aria-labelledby': 'number-button',
                                }}
                            >
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(6)
                                }}>6</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(9)
                                }}>9</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(12)
                                }}>12</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(15)
                                }}>15</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(24)
                                }}>24</MenuItem>
                                <MenuItem onClick={()=> {
                                    handleCloseNumber(30)
                                }}>30</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <ShopList list={cardShopNumber} col={3}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FullPage;