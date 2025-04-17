import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInMethaDetail from '../Components/ServiceDetails/AcRepairInMethaDetail';
const AcRepairInMetha = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/ac_service-bannerbg.jpg"
        Title="Mehta Premium AC Service"
    ></BreadCumb> 
    <AcRepairInMethaDetail />
</div>
  )
}

export default AcRepairInMetha
