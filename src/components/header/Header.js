import React, {useState} from 'react';
import {
    Avatar, Badge,
    Button,
    Divider,
    FilledInput,
    FormControl,
    Grid, InputAdornment,
    InputLabel,
    Menu,
    MenuItem,
    Toolbar, useMediaQuery, useTheme
} from "@mui/material";
import useStyle from "./Style";
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import CafeIcon from '@material-ui/icons/LocalCafe';
import CakeIcon from '@material-ui/icons/Cake';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { Person, ShoppingCart, Menu as MenuIcon, Home} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./style.css";
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from "@mui/icons-material/Search";
import ItemStore from "./ItemStore";
import {useSelector} from "react-redux";

const Header = () => {
    const listShop=useSelector(state => state.shopListReducers.listShop)
    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickMenu = (event) => {
        setOpenMenu(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setOpenMenu(null);
    };
    const theme = useTheme();
    const isLaptopSize = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}
                      className={"bg-info d-flex align-items-center justify-content-center p-2 text-light "}
                      style={{fontSize: "smaller"}}>
                    به دلیل شیوع بیماری کرونا تیم پشتیبانی به صورت دورکار در خدمت شما عزیزان می باشد
                </Grid>
                <Grid item lg={5} xs={12} style={{fontSize: "smaller"}}>
                    <Toolbar className={"p-1 d-flex justify-content-evenly "}>
                        <Link to={"/About"} className={"text-decoration-none"}>درباره ما </Link>
                        <Link className={"text-decoration-none"} to={"/Contact"}>تماس با ما</Link>
                        <Link className={"text-decoration-none"} to={"/MyAccount"}>حساب من</Link>
                        <Link to={"/Favorites"} className={"text-decoration-none"}>لیست علاقه مندی ها</Link>
                        <Link className={"text-decoration-none"} to={"/OrderTracking"}> پیگیری سفارش</Link>
                    </Toolbar>
                </Grid>
                <Grid item lg={5} sx={{display: {md: 'block', xs: 'none'}}}>
                    <div style={{direction: "ltr", fontSize: "smaller"}} className={"h-100 d-flex align-items-center"}>
                        <p className=" p-1 m-0"> ارسال سریع به سراسر کشور با هزینه رایگان در خرید بالای ۲۰۰ هزار
                            تومان</p>
                    </div>
                </Grid>
                <Grid item lg={2} sx={{display: {md: 'block', xs: 'none'}}}>
                    <div className={"d-flex align-items-center h-100"} style={{fontSize: "smaller"}}>
                        <Divider className={classes.Divider2}/>
                        <p className=" p-1 my-0"> کمک نیاز دارید ؟ : <a href={"#"}>۰۲۱۱۱۱۱۱۱</a></p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.Divider}/>
                </Grid>
                <Grid item lg={2} sx={{display: {lg: 'block', xs: 'none'}}}>
                    <div className={" d-flex row justify-content-center py-2 m-0"}>
                        <img src={"/images/shop.png"} style={{height: "90px", width: "auto"}}/>
                        <h6 className={"text-center"}><Link to={"/"} className={"text-decoration-none"}>سایت ری اکت حرفه
                            ای</Link></h6>
                    </div>
                </Grid>
                <Grid item lg={8} xs={6} className={"d-flex align-items-center py-2 "}>
                    <FormControl fullWidth sx={{m: 1}} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount" style={{fontSize: "x-large"}}>جستجو</InputLabel>
                        <FilledInput
                            className={"border border-3  rounded"}
                            id="filled-adornment-amount"
                            value={search}
                            onChange={handleSearch}
                            startAdornment={<InputAdornment position="start"><a className="text-dark m-1" href="#"
                                                                                role="button">
                                <SearchIcon/>
                            </a></InputAdornment>}
                        />
                    </FormControl>
                </Grid>
                <Grid item lg={2} xs={6} className={"d-flex align-items-center justify-content-evenly py-2 w-50"}>
                    <Link to={"/MyAccount"}><Avatar><Person/></Avatar></Link>
                    <h6>23,000 تومان</h6>
                    <Badge badgeContent={listShop.length}
                           color={"error"}
                           anchorOrigin={{
                               vertical: 'top',
                               horizontal: 'left',
                           }}><Link to={"/InvoicePage"}><Avatar><ShoppingCart/></Avatar></Link></Badge>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.Divider}/>
                </Grid>
                <Grid item lg={3} xs={6} className={"d-flex justify-content-center py-2"}>
                    <Button variant="contained" color={"primary"} aria-controls="simple-menu" aria-haspopup="true"
                            onClick={handleClick}>
                        همه دسته بندی ها<DownIcon/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        elevation={3}
                        getContentAnchorEl={null}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        style={{direction: "rtl"}}
                    >
                        <MenuItem onClick={handleClose} style={{width: "200px"}}>میوه</MenuItem>
                        <MenuItem onClick={handleClose}>اشامیدنی</MenuItem>
                        <Divider className={classes.Divider}/>
                        <MenuItem onClick={handleClose}>منجمد</MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={6} sx={{display: {sm: 'none', xs: 'block'}}}>
                    <div className={"d-flex h-100 align-items-center justify-content-center px-2"}>
                        <Button color={"primary"} variant={"contained"} onClick={handleClickMenu}
                                className={" d-flex justify-content-center"} aria-controls="simple-menu-shop"
                                aria-haspopup="true"><MenuIcon/>منو فروشگاهی </Button>
                        <Menu
                            id="simple-menu-shop"
                            anchorEl={openMenu}
                            keepMounted
                            elevation={3}
                            getContentAnchorEl={null}
                            open={Boolean(openMenu)}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            style={{direction: "rtl"}}
                        >
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link to={"/"}
                                                                                               className={"text-decoration-none"}><Home/>خانه</Link></MenuItem>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link
                                to={"/FullPage/shop"}
                                className={"text-decoration-none"}>فروشگاه</Link></MenuItem>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link
                                to={"/FullPage/meat"}
                                className={"text-decoration-none"}><RestaurantIcon/>گوشت</Link></MenuItem>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link
                                to={"/FullPage/bakery"}
                                className={"text-decoration-none"}><CakeIcon/>نانوایی</Link></MenuItem>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link
                                to={"/FullPage/drink"}
                                className={"text-decoration-none"}><CafeIcon/>نوشیدنی</Link></MenuItem>
                            <Divider className={classes.Divider}/>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link to={"/Weblog"}
                                                                                               className={"text-decoration-none"}><AssignmentIcon/>وبلاگ</Link></MenuItem>
                            <MenuItem onClick={handleCloseMenu} style={{width: "200px"}}><Link to={"/OrderTracking"}
                                                                                               className={"text-decoration-none"}> پیگیری
                                سفارش</Link></MenuItem>
                        </Menu>
                    </div>
                </Grid>
                <Grid item lg={9} sm={12} sx={{display: {sm: 'block', xs: 'none'}}}>
                    <Toolbar className={"p-3 d-flex justify-content-evenly "}>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold "}><Link to={"/"}
                                                                                                    className={"text-decoration-none "}><Home/>خانه</Link></Button>
                        <div className={"subnav"}>
                            <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link
                                to={"/FullPage/shop"}
                                className={"text-decoration-none"}>فروشگاه<DownIcon/></Link>
                            </Button>
                            <div
                                className={isLaptopSize ? "subnav-content" : "subnav-content"}>
                                <Grid container xs={12} sx={{direction: "rtl"}} className={"text-center"}>
                                    <ItemStore/>
                                </Grid>
                            </div>
                        </div>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link
                            to={"/FullPage/meat"}
                            className={"text-decoration-none"}><RestaurantIcon/>گوشت</Link></Button>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link
                            to={"/FullPage/bakery"}
                            className={"text-decoration-none"}><CakeIcon/>نانوایی</Link></Button>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link
                            to={"/FullPage/drink"}
                            className={"text-decoration-none"}><CafeIcon/>نوشیدنی</Link></Button>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link to={"/Weblog"}
                                                                                                   className={"text-decoration-none"}><AssignmentIcon/>وبلاگ</Link></Button>
                        <Button color="secondary" variant={"outlined"} className={"fw-bold"}><Link to={"/OrderTracking"}
                                                                                                   className={"text-decoration-none"}> پیگیری
                            سفارش</Link></Button>
                    </Toolbar>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.Divider}/>
                    <Divider className={classes.Divider}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;