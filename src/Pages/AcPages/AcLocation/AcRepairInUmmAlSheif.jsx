import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinUmmAlSheifDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinUmmAlSheifDetail';
const AcRepairInUmmAlSheif = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Umm Al Sheif"
    ></BreadCumb> 
    <AcRepairinUmmAlSheifDetail />
    </div>
  )
}

export default AcRepairInUmmAlSheif
