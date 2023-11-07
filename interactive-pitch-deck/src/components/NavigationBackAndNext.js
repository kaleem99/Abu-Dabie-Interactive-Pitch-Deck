import Button from "./Button";
const data = ["Back", "Next"];
const NavigationBackAndNext = ({ section, setSection, index, setIndex, courseData }) => {
  
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
          © Company name 2023. All rights reserved | Contact Us | Privacy Policy
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default NavigationBackAndNext;
