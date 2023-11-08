import "./styles.css";

const Button = ({
  name,
  check,
  setSection,
  courseData,
  section,
  index,
  setIndex,
  contentDataSection,
}) => {
  
  const nextAndBack = (type) => {
    const contentSections = contentDataSection;
    console.log(index, contentDataSection)
    if (type === "Next") {
      if (index < contentSections.length - 1) {
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
