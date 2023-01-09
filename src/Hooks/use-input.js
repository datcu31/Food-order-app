import React, { useReducer } from "react";

const initialInputState = {
    value:'',
    isTouched: false,
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    };

    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true }
    };

    if (action.type === "SUBMIT") {
        return{ value: state.value , isTouched: true}
    };
}

const useInput = (valideValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValide = valideValue(inputState.value);
    const hasError = !valueIsValide && inputState.isTouched;

    const valueInputChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value })
    };

    const valueInputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' })
    };

    const submit = () => {
        dispatch({ type: 'SUBMIT' })
    };

    return {
        value: inputState.value,
        isValide: valueIsValide,
        hasError,
        valueInputChangeHandler,
        valueInputBlurHandler,
        submit
    };
};

export default useInput;