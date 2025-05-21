import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJBRDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJBRDetail';
const AcRepairInJBR = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
    
        bgImg="img/air-condition.jpg"
        Title="AC Service in JBR"
    ></BreadCumb>
    <AcRepairInJBRDetail/>
</div>
  )
}

export default AcRepairInJBR
