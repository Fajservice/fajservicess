import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBadaaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBadaaDetail';
const AcRepairInAlBadaa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Badaa"
    ></BreadCumb>
    <AcRepairInAlBadaaDetail/>
</div>
  )
}

export default AcRepairInAlBadaa
