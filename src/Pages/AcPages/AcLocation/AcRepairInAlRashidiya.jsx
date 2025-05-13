import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlRashidiyaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlRashidiyaDetail';
const AcRepairInAlRashidiya = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Rashidiya"
    ></BreadCumb>
    <AcRepairInAlRashidiyaDetail />
</div>
  )
}

export default AcRepairInAlRashidiya
