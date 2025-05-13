import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlJafzaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlJafzaDetail';
const AcRepairInAlJafza = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Jafza"
    ></BreadCumb>
    <AcRepairInAlJafzaDetail />
</div>
  )
}

export default AcRepairInAlJafza
