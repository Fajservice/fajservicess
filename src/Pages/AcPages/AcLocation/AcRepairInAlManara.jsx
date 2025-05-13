import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlManaraDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlManaraDetail';
const AcRepairInAlManara = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Manara"
    ></BreadCumb>
    <AcRepairInAlManaraDetail />
</div>
  )
}

export default AcRepairInAlManara
