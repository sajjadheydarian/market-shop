import React from 'react';
import {Typography} from "@material-ui/core";
import {Container} from "@mui/material";
const BannerWeblog = ({title, Description, Category, image}) => {
    return (
        <Container className={"p-2 px-4"}>
            <div className={"d-flex align-items-center row p-3"} style={{
                background: `url(${image})`,
                height: "260px",
                backgroundSize: "cover",
                borderRadius: "10px"
            }}/>
            <div>
                <Typography color={"primary"} className={"py-3 opacity-50 fw-bold"}>{Category}</Typography>
                <h4 className={"py-2 "}>{title}</h4>
                <Typography>{Description}</Typography>
            </div>
        </Container>
    );
};

export default BannerWeblog;