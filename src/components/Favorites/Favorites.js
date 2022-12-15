import React from 'react';
import {Button, Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Delete} from "@material-ui/icons";
import AddIcon from '@mui/icons-material/AddShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {AddListShopList, RemoveListFavorites} from "../../redux";
import {AddAllListShopList} from "../../redux/shopListActions/shopListActions";
import {RemoveAllListFavorites} from "../../redux/favoritesActions/favoritesActions";


const Favorites = () => {
    const list=useSelector(state => state.FavoritesReducers.listFavorite)
    const dispatch=useDispatch();
    const theme = useTheme();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <h1 className={"py-3 fw-bold"}>علاقه مندی ها</h1>
                </Grid>
                <Grid item xs={12} className={list.length===0?"":"d-none"}>
                    <p className={"py-2"}>لیست علاقه مندی های شما هنوز خالی است</p>
                    <Link to={"/"}><Button className={"py-2"} variant={"contained"} color={"primary"}>بازگشت به خرید</Button></Link>
                </Grid>
                <Grid item xs={12} className={list.length===0?"d-none":""}>
                    <TableContainer component={Paper} className={isPhoneSize?"":"px-3"}>
                        <Table  size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"right"}>محصول</TableCell>
                                    <TableCell align="right" >قیمت</TableCell>
                                    <TableCell align="center">وضعیت موجودی</TableCell>
                                    <TableCell align="right" className={"text-center"}>اضافه به خرید</TableCell>
                                    <TableCell align="right">حذف</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {list.map(row => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell padding={isPhoneSize?"none":"normal"}  className={isPhoneSize?"py-3 border-0":"py-3"} align={"right"} component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell padding={isPhoneSize?"none":"normal"}  className={isPhoneSize?"py-3 border-0 text-center d-none":"py-3"} align="right">{row.price2}</TableCell>
                                        <TableCell padding={isPhoneSize?"none":"normal"}  className={isPhoneSize?"py-3 border-0 text-center ":"py-3 text-center"} align="right">{row.existence?"موجود":"ناموجود"}</TableCell>
                                        <TableCell padding={isPhoneSize?"none":"normal"}  className={isPhoneSize?"py-3 border-0 text-center":"py-3 text-center"} align="right"><AddIcon onClick={()=>{dispatch(AddListShopList(row));dispatch(RemoveListFavorites(row))}}/></TableCell>
                                        <TableCell padding={isPhoneSize?"none":"normal"}  className={isPhoneSize?"py-3 border-0":"py-3"} align="right"><Delete onClick={()=>{dispatch(RemoveListFavorites(row))}}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={"d-flex justify-content-end py-3"}>
                        <Button  variant={"contained"} onClick={()=>{dispatch(AddAllListShopList(list));dispatch(RemoveAllListFavorites())}}>افزودن همه به سبد خرید</Button>
                    </div>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Favorites;