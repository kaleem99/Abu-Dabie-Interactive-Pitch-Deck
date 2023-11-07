import { BsDot } from "react-icons/bs";

const BreadCrumbs = ({ courseData, section, contentDataSection }) => {
  return (
    <div className="BreadCrumbsMenu">
      {courseData.courseSections.map((data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <span>{data.name}</span>
          <span style={{ fontSize: "larger" }}>
            <BsDot />
          </span>
          <span>{data.unit.name}</span>
          <span style={{ fontSize: "larger" }}>
            <BsDot />
          </span>
          <span>{contentDataSection.name}</span>
        </div>
      ))}
    </div>
  );
};
export default BreadCrumbs;
