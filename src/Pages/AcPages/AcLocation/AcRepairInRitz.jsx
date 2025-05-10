import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInRitzDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInRitzDetail';
const AcRepairInRitz = () => {
    
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.jpg"
        bgImg="img/air-condition.jpg"
        Title="AC Service in the Ritz Carlton DIFC"
    ></BreadCumb> 
    <AcRepairInRitzDetail />
</div>
  )
}

export default AcRepairInRitz
