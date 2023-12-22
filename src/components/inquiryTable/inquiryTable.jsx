import { useState } from "react";
import InquiryForm from "./inquiryForm/inquiryForm";
import InquiryList from "./inquiryList/inquiryList";
import TabBar from "./tabBar";

function InquiryTable() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 pt-0 ">
      <div className="bg-white shadow rounded-lg max-w-sm mx-auto">
        {/* 헤더 섹션 */}
        <TabBar tabIndex={tabIndex} onTabChange={handleTabChange} />
        {tabIndex === 0 && <InquiryForm onTabChange={handleTabChange} />}
        {tabIndex === 1 && <InquiryList />}
      </div>
    </div>
  );
}

export default InquiryTable;
