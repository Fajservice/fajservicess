import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahLakeTowersDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahLakeTowersDetail';
const AcRepairInJumeirahLakeTowers = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.jpg"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jumeirah Lake Towers"
    ></BreadCumb>
    <AcRepairInJumeirahLakeTowersDetail/>
</div>
  )
}

export default AcRepairInJumeirahLakeTowers
