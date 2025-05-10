import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAcademyCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAcademyCityDetail';
const AcRepairInAcademyCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.jpg"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Academy City"
    ></BreadCumb>
    <AcRepairInAcademyCityDetail />
</div>
  )
}

export default AcRepairInAcademyCity
