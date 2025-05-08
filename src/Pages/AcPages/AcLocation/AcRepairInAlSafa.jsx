import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlSafaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlSafaDetail';
const AcRepairInAlSafa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Safa"
    ></BreadCumb>
    <AcRepairInAlSafaDetail />
</div>
  )
}

export default AcRepairInAlSafa
