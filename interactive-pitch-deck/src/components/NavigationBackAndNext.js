import Button from "./Button";
import chatBotImage from "../Images/chatBot.png";

const data = ["Back", "Next"];
const NavigationBackAndNext = ({
  section,
  setSection,
  index,
  setIndex,
  courseData,
  contentDataSection,
  setUnitSection,
  unitSection
}) => {
  return (
    <div className="NavigationBackAndNext">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "10vh",
          marginLeft: "5%",
        }}
      >
        <span
          style={{ marginTop: "auto", marginBottom: "25px", fontSize: "12px" }}
        >
          © Company name 2023. All rights reserved |{" "}
          <a className="hyperLink" href="#">
            Contact Us
          </a>{" "}
          |{" "}
          <a className="hyperLink" href="#">
            Privacy Policy
          </a>
        </span>
      </div>
      <div className="innerNavBackAndNext">
        {data.map((name, i) => {
          return (
            <Button
              setSection={setSection}
              check={{ Next: "", Back: "" }}
              section={section}
              name={name}
              courseData={courseData}
              index={index}
              setIndex={setIndex}
              contentDataSection={contentDataSection}
              setUnitSection={setUnitSection}
              unitSection={unitSection}
            />
          );
        })}
      </div>
      {/* <img
        style={{ marginBottom: "20px" }}
        width={68}
        height={68}
        src={chatBotImage}
      /> */}
    </div>
  );
};
export default NavigationBackAndNext;
