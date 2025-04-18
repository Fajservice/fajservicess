import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInRitzDetail from '../Components/ServiceDetails/AcRepairInRitzDetail';
const AcRepairInRitz = () => {
    
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Ritz Carlton DIFC"
    ></BreadCumb> 
    <AcRepairInRitzDetail></AcRepairInRitzDetail>
</div>
  )
}

export default AcRepairInRitz
