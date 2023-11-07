import Button from "./Button";
import NavContentData from "../Content/NavContent";
const data = ["Back", "Next"];
const NavigationBackAndNext = ({ section, setSection, index, setIndex }) => {
  const checkCondition = (i) => {
    let Next = false;
    let Back = false;
    const result = NavContentData.filter((data) => data.name === section)[0].id;
    if (result - 1 === 0) {
      Back = true;
    }
    if (result === NavContentData.length) {
      Next = true;
    }
    return { Next, Back };
  };
  return (
    <div className="NavigationBackAndNext">
      <div className="innerNavBackAndNext">
        {data.map((name, i) => {
          return (
            <Button
              setSection={setSection}
              check={{ Next: "", Back: "" }}
              section={section}
              name={name}
              NavContentData={NavContentData}
              index={index}
              setIndex={setIndex}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NavigationBackAndNext;
