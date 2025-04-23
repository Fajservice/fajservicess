import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeirahGolfEstatesDetail from '../Components/ServiceDetails/AcRepairInJumeirahGolfEstatesDetail';
const AcRepairInJumeirahGolfEstates = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Jumeirah Golf Estates"
    ></BreadCumb>
    <AcRepairInJumeirahGolfEstatesDetail/>
</div>
  )
}

export default AcRepairInJumeirahGolfEstates
