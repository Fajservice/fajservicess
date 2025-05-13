import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarshaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarshaDetail';
const AcRepairInAlBarsha = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Barsha"
    ></BreadCumb>
    <AcRepairInAlBarshaDetail />
</div>
  )
}

export default AcRepairInAlBarsha
