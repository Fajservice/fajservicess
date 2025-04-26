import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinAlJafiliyaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinAlJafiliyaDetail';
const AcRepairinAlJafiliya = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Jafiliya"
    ></BreadCumb>
    <AcRepairinAlJafiliyaDetail />
</div>
  )
}

export default AcRepairinAlJafiliya
