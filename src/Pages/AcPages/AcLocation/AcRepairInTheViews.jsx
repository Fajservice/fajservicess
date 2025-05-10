import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheViewsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheViewsDetail';

const AcRepairInTheViews = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Mankhool"
    ></BreadCumb>
    <AcRepairInTheViewsDetail />
</div>
  )
}

export default AcRepairInTheViews
