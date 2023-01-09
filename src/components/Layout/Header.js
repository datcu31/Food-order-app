import React, { Fragment } from "react";

import mealsImg from '../../assets/meal-1.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>The Food App</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes[`main-image`]}>
                <img src={mealsImg} alt="img meals"/>
            </div>
        </Fragment>
    );
};

export default Header;