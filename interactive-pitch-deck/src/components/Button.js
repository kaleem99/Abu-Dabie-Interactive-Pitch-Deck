import "./styles.css";
import AppContent from "../Content/AppContent.json";
const Button = ({
  name,
  check,
  setSection,
  courseData,
  section,
  index,
  setIndex,
  contentDataSection,
  setUnitSection,
  unitSection,
}) => {
  const nextAndBack = (type) => {
    const contentSections = contentDataSection;
    const courseSections = AppContent.courseSections[0].unit.sections;

    if (type === "Next") {
      if (index < contentSections.length - 1) {
        setIndex(index + 1);
      } else {
        if (unitSection < courseSections.length - 1) {
          const nextIndex = unitSection + 1;
          setUnitSection(nextIndex);
          setSection(courseSections[nextIndex].name);
          setIndex(0);
        }
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        if (unitSection > 0) {
          const nextIndex = unitSection - 1;
          setUnitSection(nextIndex);

          const lastSubSection = courseSections[nextIndex].content.length - 1;
          setIndex(lastSubSection);

          setSection(courseSections[nextIndex].name);
        }
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
