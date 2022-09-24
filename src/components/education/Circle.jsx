const Circle = (props) => {
  const circle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: props.bgColor,
    borderRadius: "50%",
    width: 100,
    height: 100,
    color: "white",
  };
  return <div style={circle}>{props.course}</div>;
};

export default Circle;
