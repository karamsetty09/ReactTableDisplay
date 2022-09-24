import { useState, Fragment } from "react";
import Hr from "./common/hr";
import { Header } from "./header/header";
import { compose } from "redux";

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
    </div>
  );
}
