import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInDubaiStudioCityDetail from '../Components/ServiceDetails/AcRepairInDubaiStudioCityDetail';
const AcRepairInDubaiStudioCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Dubai Studio City"
    ></BreadCumb>
    <AcRepairInDubaiStudioCityDetail />
</div>
  )
}

export default AcRepairInDubaiStudioCity
