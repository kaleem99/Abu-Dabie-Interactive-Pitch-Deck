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
    <table
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
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
        {/* <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Define the objective/s of your machine learning project.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Establish your data requirements and how data will be accessed.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Establish how the acquired data will be processed.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Decide on which machine learning tool will be employed.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Outline the human resources requirements for the project.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#e7ecef",
              width: "91.3136%",
            }}
            colSpan="2"
          >
            Outline how the output of this project will be used to inform
            business decisions.
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "50%",
              borderRight: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
          <td
            style={{
              width: "50%",
              borderLeft: "1px solid #E7ECEF",
            }}
          >
            {" "}
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default ReflectionTable;
