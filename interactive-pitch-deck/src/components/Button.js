import "./styles.css";

const Button = ({ name, check, setSection, NavContentData, section }) => {
  const buttonIsHovered = (e) => {
    e.target.style.backgroundColor = "#063461";
    e.target.style.color = "white";
  };
  const buttonIsNotHovered = (e) => {
    e.target.style.backgroundColor = "buttonface";
    e.target.style.color = "black";
  };
  const nextAndBack = (type) => {
    let index = NavContentData.filter((data) => data.name === section)[0].id;

    if (type === "Next") {
      console.log(index);
      if (index === NavContentData.length) {
        index = 0;
      }
      setSection(NavContentData[index].name);
    } else {
      setSection(NavContentData[index - 2].name);
    }
  };
  console.log(check, "CHECK", 100);
  return (
    <button
      disabled={check}
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
