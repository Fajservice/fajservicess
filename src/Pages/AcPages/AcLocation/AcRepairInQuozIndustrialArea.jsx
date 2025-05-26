import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInQuozIndustrialAreaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInQuozIndustrialAreaDetail';
const AcRepairInQuozIndustrialArea = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Quoz Industrial Area"
    ></BreadCumb>
    <AcRepairInQuozIndustrialAreaDetail />
</div>
  )
}

export default AcRepairInQuozIndustrialArea
