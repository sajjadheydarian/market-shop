import React from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Slider, {SliderThumb} from "@mui/material/Slider";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

const SidebarFullPage = () => {
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    const { gilad, jason, antoine } = state;
    return (<>
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">دسته بندی محصول</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="میگو"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="مرغ خورد شده"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="گوشت گوسفندی"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="میگو"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="مرغ خورد شده"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="گوشت گوسفندی"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    <Box sx={{ m: 3 }} className={"py-3 px-2"} >
        <Typography className={"mb-5"} gutterBottom>فیلتر با قیمت:<span> (قیمت براساس تومان است):</span></Typography>
        <AirbnbSlider
            components={{ Thumb: AirbnbThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[200_000, 3_000_000]}
            step={100000}
            max={5_000_000}
            valueLabelDisplay="on"
        />
        <div className={"d-flex justify-content-end"}><Button variant={"outlined"}  >فیلتر</Button></div>
    </Box>
    <Box sx={{ display: 'flex' }} className={"py-3"}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">وضعیت محصول</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                    }
                    label="انبار"
                />

                <FormControlLabel
                    control={
                        <Checkbox checked={jason} onChange={handleChange} name="jason" />
                    }
                    label="حراج"
                />
            </FormGroup>
        </FormControl>
    </Box>
    <Box sx={{ display: 'flex' }} className={"py-3"}>
        <Typography className={"opacity-75"}>برند محصول:</Typography>
        <ul className={"list-unstyled"}>
            <li><Link to={"#"} color={"inherit"}>پگاه</Link></li>
            <li><Link to={"#"} color={"inherit"}>تبرک</Link></li>
            <li><Link to={"#"} color={"inherit"}>اذوقه</Link></li>
            <li><Link to={"#"} color={"inherit"}>دامداران</Link></li>
        </ul>
    </Box>
    <Box sx={{ display: 'flex' }} className={"py-3"}>
        <img src={"/images/sidebar-banner.gif"} style={{width:"300px"}}/>
    </Box>
    </>);
};

export default SidebarFullPage;