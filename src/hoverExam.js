import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{width:"40px",height:"50px"}}>
            <Button
                id="demo-positioned-button-shop"
                aria-controls={open ? 'demo-positioned-menu-shop' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                onMouseLeave={handleClose}
            >
                Dashboard
            </Button>
            <Menu
                id="demo-positioned-menu-shop"
                aria-labelledby="demo-positioned-button-shop"
                anchorEl={anchorEl}
                open={open}
                onMouseDown={handleClick}
                onMouseOut={handleClose}
                onMouseOver={handleClick}
                onMouseLeave={handleClose}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}