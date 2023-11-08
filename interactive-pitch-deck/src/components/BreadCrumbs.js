import { BsDot } from "react-icons/bs";

const BreadCrumbs = ({ courseData, section, contentDataSection, index }) => {
  console.log(section);
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
          <span
            style={{
              marginTop: "auto",
              fontSize: "larger",
              justifyContent: "center",
              marginBottom: "auto",
              alignItems: "center",
              display: "flex",
            }}
          >
            <BsDot />
          </span>
          <span>{data.unit.name}</span>
          <span
            style={{
              marginTop: "auto",
              fontSize: "larger",
              justifyContent: "center",
              marginBottom: "auto",
              alignItems: "center",
              display: "flex",
            }}
          >
            <BsDot />
          </span>
          <span>{section}</span>
          <span
            style={{
              marginTop: "auto",
              fontSize: "larger",
              justifyContent: "center",
              marginBottom: "auto",
              alignItems: "center",
              display: "flex",
            }}
          >
            <BsDot />
          </span>
          <span>{contentDataSection[index].name}</span>
        </div>
      ))}
    </div>
  );
};
export default BreadCrumbs;