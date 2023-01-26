import { useState, Fragment, useRef, useEffect } from "react";
import Hr from "./common/hr";
import { Header } from "./header/header";
import { compose } from "redux";
import "./contactMe.scss";

export default function ContactMe() {
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

  // using ref
  const nameInputRef = useRef<HTMLInputElement>(null);

  // When to use the ref or state

  // for Instant validation & reset the variable -> Use useState()
  // Never try to reset the current value in react not recommendable.
  // nameInputRef.current.value = ''; => NOT IDEAL, DON'T Manipulate the dom

  const [enterdName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event: any) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enterdName);
    const enteredValue = nameInputRef.current?.value;
    console.log(enteredValue);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
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
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
          />
        </div>
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
