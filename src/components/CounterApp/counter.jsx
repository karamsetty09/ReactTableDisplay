import Hr from "../common/hr";
import { Header } from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import "./counter.scss";
import { decrement, increment, set } from "./actions";
import SetCounter from "./SetCounter";
import CalculateApp from "./CalculateTemp/Calculate";

const CounterApp = () => {
  const center = {
    textAlign: "center",
  };
  const incident = "Incident";
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <div style={center}>
        <Header text="Counter-App" color="white" />
      </div>
      <Hr />
      <div className="wrapper">
        <div className="a">
          <main className="Counter">
            <h1>Days Since Last {incident}</h1>
            <p className="count">{count}</p>
            <section className="controls">
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={() => dispatch(set(0))}>Reset</button>
              <button onClick={() => dispatch(decrement())}>Decrement</button>
            </section>
            <SetCounter />
          </main>
        </div>
        <div className="b">
          <main className="Counter">
            <h1>Temperature conversion App with Boiling Point</h1>
            <CalculateApp></CalculateApp>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
