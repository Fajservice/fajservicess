import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInUmmRamoolDetail from "../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInUmmRamoolDetail.jsx";
const AcRepairInUmmRamool = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Umm Ramool"
    ></BreadCumb>
    <AcRepairInUmmRamoolDetail />
</div>
  )
}

export default AcRepairInUmmRamool
