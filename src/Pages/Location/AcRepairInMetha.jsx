import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInMethaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInMethaDetail';
const AcRepairInMetha = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="Mehta Premium AC Service"
    ></BreadCumb> 
    <AcRepairInMethaDetail />
</div>
  )
}

export default AcRepairInMetha
