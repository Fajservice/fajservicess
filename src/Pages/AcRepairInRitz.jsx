import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInRitzDetail from '../Components/ServiceDetails/AcRepairInRitzDetail';
const AcRepairInRitz = () => {
    
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/ac_service-bannerbg.jpg"
        Title="Dubai's Premier AC Service - AC Repair and Maintenance"
    ></BreadCumb> 
    <AcRepairInRitzDetail></AcRepairInRitzDetail>
</div>
  )
}

export default AcRepairInRitz
