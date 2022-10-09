import React from 'react';


import style from "./assets/css/Loader.module.css";

const PageLoader = () => {
    return (
        <div className={style['content-loader']}>
            <span className={style.spinner + ' ' + style['spinner-large']}></span>
        </div>
    );
};

export default PageLoader;