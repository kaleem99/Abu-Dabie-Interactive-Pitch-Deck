import "./styles.css";

const Button = ({
  name,
  check,
  setSection,
  NavContentData,
  section,
  index,
  setIndex,
}) => {
  const buttonIsHovered = (e) => {
    e.target.style.backgroundColor = "#063461";
    e.target.style.color = "white";
  };
  const buttonIsNotHovered = (e) => {
    e.target.style.backgroundColor = "buttonface";
    e.target.style.color = "black";
  };
  const nextAndBack = (type) => {
    console.log(index, "100");
    if (type === "Next") {
      console.log(index);
      if (index === 0) {
        setIndex(index + 1);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };
  return (
    <button
      // disabled={check}
      //   onMouseOver={(e) => !check && buttonIsHovered(e)}
      //   onMouseOut={(e) => !check && buttonIsNotHovered(e)}
      onClick={() => nextAndBack(name)}
      className="standardButton"
    >
      {name}
    </button>
  );
};

export default Button;
