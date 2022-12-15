import React from 'react';
import { Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const BigItemTable = ({address,image,title,number}) => {
    return (
        <Link to={address} className={"d-flex align-items-center justify-content-center border text-decoration-none"}>
            <img src={image} style={{width: "122px"}} alt={"بیسکوییت"}/>
            <div>
                <Typography>{title}</Typography>
                <Typography style={{fontSize: "small"}}>{number} مورد</Typography>
            </div>
        </Link>
    );
};

export default BigItemTable;