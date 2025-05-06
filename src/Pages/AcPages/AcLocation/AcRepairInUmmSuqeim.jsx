import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInUmmSuqeimDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInUmmSuqeimDetail';
const AcRepairInUmmSuqeim = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Umm Suqeim"
    ></BreadCumb>
    <AcRepairInUmmSuqeimDetail />
</div>
  )
}

export default AcRepairInUmmSuqeim
