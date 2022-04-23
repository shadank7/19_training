import propsTypes from "prop-types";
const ValidateProps = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Preferred cities: {props.preferredCities}</h1>
      <h1>Age: {props.age}</h1>
    </>
  );
};

ValidateProps.propsTypes = {
  name: propsTypes.string.isRequired,
  preferredCities: propsTypes.array.isRequired,
  age: propsTypes.number.isRequired,
  customProp: function (props, age) {
    if (props[age] <= 18 || props[age] >= 60) {
      return new Error("Age is less then 18 or greater then 60");
    }
  },
};

ValidateProps.defaultProps = {
  name: "Steve",
  preferredCities: ["Bangalore", " Chennai"],
  age: 18,
};

export default ValidateProps;
