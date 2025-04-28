import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBadaaDetail from '../../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlBadaaDetail';
const AcRepairInJBR = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Badaa"
    ></BreadCumb>
    <AcRepairInAlBadaaDetail/>
</div>
  )
}

export default AcRepairInJBR
