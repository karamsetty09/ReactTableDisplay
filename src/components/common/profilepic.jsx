import React from "react";
import image from "../assets/Home/2999AC0220334860873_P.jpg";
export default function profilepic() {
  return (
    <img
      src={image}
      style={{ width: 150, height: 150, borderRadius: 150 / 2, padding: 4 }}
    />
  );
}
