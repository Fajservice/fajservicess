import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahGolfEstatesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahGolfEstatesDetail';
const AcRepairInJumeirahGolfEstates = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jumeirah Golf Estates"
    ></BreadCumb>
    <AcRepairInJumeirahGolfEstatesDetail/>
</div>
  )
}

export default AcRepairInJumeirahGolfEstates
