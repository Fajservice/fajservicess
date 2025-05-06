import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWarqaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWarqaDetail';
const AcRepairInAlWarqa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Warqa"
    ></BreadCumb>
    <AcRepairInAlWarqaDetail />
</div>
  )
}

export default AcRepairInAlWarqa
