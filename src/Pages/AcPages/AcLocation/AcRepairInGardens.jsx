import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInGardensDetails from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInGardensDetails';

const AcRepairInGardens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
       
        bgImg="img/air-condition.jpg"
        Title="AC Service in The Gardens"
    ></BreadCumb>
    <AcRepairInGardensDetails />
</div>
  )
}

export default AcRepairInGardens
