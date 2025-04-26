import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInAlJafzaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlJafzaDetail';
const AcRepairInAlJafza = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Jafza"
    ></BreadCumb>
    <AcRepairInAlJafzaDetail />
</div>
  )
}

export default AcRepairInAlJafza
