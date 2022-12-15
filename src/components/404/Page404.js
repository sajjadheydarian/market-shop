import React from 'react';
import {Link} from "react-router-dom";
const Page404 = () => {
    return (
        <div className={"d-flex justify-content-center flex-column align-items-center"} style={{height:'600px'}} >
            <h1>این آدرس وجود ندارد.خطای 404</h1>
            <Link to={'/'} className={"text-decoration-none btn btn-info"}>صفحه اصلی</Link>

        </div>
    );
};

export default Page404;