import { useState, Fragment, useEffect } from "react";
import Hr from "./common/hr";
import { Header } from "./header/header";
import { compose } from "redux";
import "./contactMe.scss";
import useInput from "../hooks/use-input";

export default function ContactMe() {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: any) => value.includes("@"));

  const [isGreen, setIsGreen] = useState(true);

  const makeLouder = (string: string) => string.toUpperCase();
  const repeatThreeTimes = (string: string) => string.repeat(3);
  const embolden = (string: string) => string.bold();

  const normal = (string: string) =>
    embolden(repeatThreeTimes(makeLouder(string)));
  console.log(normal("normal"));
  const make = compose(embolden, repeatThreeTimes, makeLouder);
  console.log(make("store_compose "));
  const center = {
    textAlign: "center",
  };

  // When to use the ref or state

  // for Instant validation & reset the variable -> Use useState()
  // Never try to reset the current value in react not recommendable.
  // nameInputRef.current.value = ''; => NOT IDEAL, DON'T Manipulate the dom

  // const [enterdName, setEnteredName] = useState("");
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const enteredNameIsValid = enterdName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onBlur={nameBlurHandler}
            onChange={nameChangedHandler}
            value={enteredName}
          />
        </div>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}

        <div className={emailInputClasses}>
          <label htmlFor="name">Your Email</label>
          <input
            type="text"
            id="name"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
        </div>
        {emailInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <Fragment>
        <hr />
        <div>
          <Header text="CONTACT-ME" color="white" />
        </div>
        <Hr />
        <address>
          <em>
            Address: 8 Woodhill Street
            <br />
            Post-code: Fairy Meadow - 2519
            <br />
            State: NSW - Australia
            <br />
            Moblile No: <a href="tel: +61 479155146">0479155146</a>
            <br />
            <a href="mailto:venkatasandeepkumarkaramsetty@gmail.com">
              venkatasandeepkumarkaramsetty@gmail.com
            </a>
          </em>
        </address>

        <details
          onClick={() => setIsGreen(!isGreen)}
          style={{ color: isGreen ? "limegreen" : "crimson" }}
        >
          <h4>Mixed Berry Tart.</h4>
          <h6>
            Raspberries, blueberries, and strawberries on top of a creamy
            filling served in a crispy tart.
          </h6>
        </details>
      </Fragment>
    </div>
  );
}
