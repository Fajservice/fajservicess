import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahParkDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahParkDetail';
const AcRepairInJumeirahPark = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Jumeirah Park"
    ></BreadCumb>
    <AcRepairInJumeirahParkDetail />
</div>
  )
}

export default AcRepairInJumeirahPark
