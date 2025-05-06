import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMethaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMethaDetail';
const AcRepairInMetha = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Metha"
    ></BreadCumb> 
    <AcRepairInMethaDetail />
</div>
  )
}

export default AcRepairInMetha
