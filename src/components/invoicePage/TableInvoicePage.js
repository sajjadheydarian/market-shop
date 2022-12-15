import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Delete} from "@material-ui/icons";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AdditionListShopList, DeductionListShopList, RemoveListShopList} from "../../redux";

function createData(name, calories, fat, carbs, protein, id) {
    return {name, calories, fat, carbs, protein, id};
}

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, <Delete/>,1),
//     createData('Ice cream sandwich', 237, 9.0, 37, <Delete/>,2),
//     createData('Eclair', 262, 16.0, 24, <Delete/>,3),
//     createData('Cupcake', 305, 3.7, 67, <Delete/>,4),
//     createData('Gingerbread', 356, 16.0, 49, <Delete/>,5),
// ];
const TableInvoicePage = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.shopListReducers.listShop)
    const rowsFavorites = list.map(item => {
        return (
            createData(item.title, item.price2, item.number, item.number * parseInt(item.price2), <Delete/>, item.id))
    });
    const theme = useTheme();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <TableContainer component={Paper} className={isPhoneSize ? "" : "px-3"}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align={"right"}>محصول</TableCell>
                        <TableCell align="right" className={isPhoneSize ? "d-none" : ""}>قیمت</TableCell>
                        <TableCell align="center">تعداد</TableCell>
                        <TableCell align="right">جمع جزء</TableCell>
                        <TableCell align="right">حذف</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsFavorites.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell padding={isPhoneSize ? "none" : "normal"}
                                       className={isPhoneSize ? "py-3 border-0" : "py-3"} align={"right"} component="th"
                                       scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell padding={isPhoneSize ? "none" : "normal"}
                                       className={isPhoneSize ? "py-3 border-0 text-center d-none" : "py-3"}
                                       align="right">{row.calories}</TableCell>
                            <TableCell padding={isPhoneSize ? "none" : "normal"}
                                       className={isPhoneSize ? "py-3 border-0 d-flex justify-content-around" : "py-3 d-flex justify-content-around"}
                                       align="right"><DoDisturbOnIcon onClick={() => {
                                dispatch(DeductionListShopList(row))
                            }}/><Typography>{row.fat}</Typography><AddCircleIcon onClick={() => {
                                dispatch(AdditionListShopList(row))
                            }}/></TableCell>
                            <TableCell padding={isPhoneSize ? "none" : "normal"}
                                       className={isPhoneSize ? "py-3 border-0 text-center" : "py-3"}
                                       align="right">{row.carbs}</TableCell>
                            <TableCell padding={isPhoneSize ? "none" : "normal"}
                                       className={isPhoneSize ? "py-3 border-0" : "py-3"} align="right"><Delete
                                onClick={() => {
                                    dispatch(RemoveListShopList(row))
                                }}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableInvoicePage;