import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";



const Tabs = ({students}) => {

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
  const [activeTab, setActiveTab] = useState("tab1");
   return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Full Roster Reports</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Individual Student Management</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab students={students} /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;