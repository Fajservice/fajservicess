import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDubaiHillsEstateDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDubaiHillsEstateDetail';
const AcRepairInDubaiHillsEstate = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Damac Hill"
    ></BreadCumb>
    <AcRepairInDubaiHillsEstateDetail />
</div>
  )
}

export default AcRepairInDubaiHillsEstate
