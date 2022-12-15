import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const ItemTable = ({image,title,number,address}) => {
    return (
            <Grid item lg={3} xs={6}>
                <Link to={address} className={"d-flex align-items-center justify-content-center border text-decoration-none"}>
                    <img src={image} style={{width: "60px"}}/>
                    <div>
                        <Typography>{title}</Typography>
                        <Typography style={{fontSize: "small"}}>{number} مورد</Typography>
                    </div>
                </Link>
            </Grid>
    );
};

export default ItemTable;