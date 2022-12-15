import React from 'react';
import {Button} from "@mui/material";

const ItemWeblog = ({image, title,date,category,id,text,subject}) => {
    return (
        <div className={"my-3"}>
            <img src={image} style={{height: "80vh"}} className={"my-2 rounded"}/>
            <p className={"my-2"}>{date},
                {category},
                {subject}</p>
            <h1 className={"fw-bold my-2"}>{title}</h1>
            <p className={"my-2"}>{text}</p>
            <Button className={"my-2"} variant={"contained"}>ادامه مطلب</Button>
        </div>
    );
};

export default ItemWeblog;