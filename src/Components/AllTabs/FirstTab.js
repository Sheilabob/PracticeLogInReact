import React from "react";
const FirstTab = ({students}) => {
  return (
    <div className="FirstTab">
      <p>Full Roster Reports</p>
      {/* First tab content will go here */}
      Students: {students}
    </div>
  );
};
export default FirstTab;