const tableData = [
  {
    column1: "Technical requirements",
    column2: "Stakeholders and how to achieve buy-in",
  },
  { text: "Define the objective/s of your machine learning project." },
  {
    column1: "",
    column2: "",
  },
  { text: "Establish your data requirements and how data will be accessed." },
  {
    column1: "",
    column2: "",
  },
  { text: "Establish how the acquired data will be processed." },
  {
    column1: "",
    column2: "",
  },
  { text: "Decide on which machine learning tool will be employed." },
  {
    column1: "",
    column2: "",
  },
  { text: "Outline the human resources requirements for the project." },
  {
    column1: "",
    column2: "",
  },
  {
    text: "Outline how the output of this project will be used to inform business decisions.",
  },
  {
    column1: "",
    column2: "",
  },
];
const ReflectionTable = () => {
  return (
    <div className="TableDiv">
      <table
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          // paddingBottom: "30px",
        }}
        cellSpacing="0"
        cellPadding="5"
      >
        <tbody>
          {tableData.map((content, i) => {
            return i === 0 ? (
              <tr>
                <td
                  style={{
                    backgroundColor: "#2546f0",
                    color: "#ffffff",
                    width: "50%",
                    borderRight: "1px solid #FFFFFF",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {content.column1}
                </td>
                <td
                  style={{
                    backgroundColor: "#2546f0",
                    color: "#ffffff",
                    width: "50%",
                    borderLeft: "1px solid #FFFFFF",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {content.column2}
                </td>
              </tr>
            ) : i % 2 === 0 ? (
              <tr>
                <td
                  style={{
                    width: "50%",
                    borderRight: "1px solid #E7ECEF",
                  }}
                >
                  {content.column1}
                </td>
                <td
                  style={{
                    width: "50%",
                    borderLeft: "1px solid #E7ECEF",
                  }}
                >
                  {content.column2}
                </td>
              </tr>
            ) : (
              <tr>
                <td
                  style={{
                    backgroundColor: "#e7ecef",
                    width: "91.3136%",
                  }}
                  colSpan="2"
                >
                  {content.text}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReflectionTable;
