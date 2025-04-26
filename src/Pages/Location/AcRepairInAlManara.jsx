import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInAlManaraDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlManaraDetail';
const AcRepairInAlManara = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Manara"
    ></BreadCumb>
    <AcRepairInAlManaraDetail />
</div>
  )
}

export default AcRepairInAlManara
