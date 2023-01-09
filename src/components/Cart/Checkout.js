import React from "react";
import useInput from "../../Hooks/use-input";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const Checkout = (props) => {

    const {
        value: enteredName,
        isValide: enteredNameIsValide,
        hasError: nameInputHasError,
        valueInputChangeHandler: nameInputChangeHandler,
        valueInputBlurHandler: nameInputBlurHandler,
        submit: submitNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredStreet,
        isValide: enteredStreetIsValide,
        hasError: streetInputHasError,
        valueInputChangeHandler: streetInputChangeHandler,
        valueInputBlurHandler: streetInputBlurHandler,
        submit: submitStreetInput
    } = useInput(isNotEmpty)

    const {
        value: enteredPostalCode,
        isValide: enteredPostalCodeIsValide,
        hasError: postalCodeInputHasError,
        valueInputChangeHandler: postalCodeInputChangeHandler,
        valueInputBlurHandler: postalCodeInputBlurHandler,
        submit: submitPostalCodeInput
    } = useInput(value => value.trim().length === 5)

    const {
        value: enteredCity,
        isValide: enteredCityIsValide,
        hasError: cityInputHasError,
        valueInputChangeHandler: cityInputChangeHandler,
        valueInputBlurHandler: cityInputBlurHandler,
        submit: submitCityInput
    } = useInput(isNotEmpty)

    let formIsValide = false;

    if (enteredNameIsValide && enteredStreetIsValide && enteredPostalCodeIsValide && enteredCityIsValide) {
        formIsValide = true;
    }

    const confirmHandler = (event) => {
        event.preventDefault();

        submitNameInput();
        submitStreetInput();
        submitPostalCodeInput();
        submitCityInput();

        if (!formIsValide) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });


    }

    const nameClasses = `${classes.control} ${nameInputHasError ? classes.invalid : ''}`
    const streetClasses = `${classes.control} ${streetInputHasError ? classes.invalid : ''}`
    const postalCodeClasses = `${classes.control} ${postalCodeInputHasError ? classes.invalid : ''}`
    const cityClasses = `${classes.control} ${cityInputHasError ? classes.invalid : ''}`

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Your name:</label>
                <input
                    type='text'
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p>Please enter a valide name.</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor="street">Street:</label>
                <input
                    type='text'
                    id="street"
                    onChange={streetInputChangeHandler}
                    onBlur={streetInputBlurHandler}
                    value={enteredStreet}
                />
                {streetInputHasError && <p>Please enter a valide street.</p>}
            </div>
            <div className={postalCodeClasses}>
                <label htmlFor="postal">Postal code:</label>
                <input
                    type='text'
                    id="postal"
                    onChange={postalCodeInputChangeHandler}
                    onBlur={postalCodeInputBlurHandler}
                    value={enteredPostalCode}
                />
                {postalCodeInputHasError && <p>Please enter a valide postal code (5 characters).</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor="city">City:</label>
                <input
                    type='text'
                    id="city"
                    onChange={cityInputChangeHandler}
                    onBlur={cityInputBlurHandler}
                    value={enteredCity}
                />
                {cityInputHasError && <p>Please enter a valide city.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button  className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;