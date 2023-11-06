import NavigationBackAndNext from "./NavigationBackAndNext";

const Content = ({ section, setSection }) => {
  return (
    <div className="Content">
      <div className="InnerContent">
        <span className="heading">{section}</span>
      </div>
      <NavigationBackAndNext setSection={setSection} section={section} />
    </div>
  );
};

export default Content;
