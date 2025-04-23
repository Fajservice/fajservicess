import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeirahLakeTowersDetail from '../Components/ServiceDetails/AcRepairInJumeirahLakeTowersDetail';
const AcRepairInJumeirahLakeTowers = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Dubai Internet City"
    ></BreadCumb>
    <AcRepairInJumeirahLakeTowersDetail/>
</div>
  )
}

export default AcRepairInJumeirahLakeTowers
