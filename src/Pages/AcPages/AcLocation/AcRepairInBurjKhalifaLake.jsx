import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBurjKhalifaLakeDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBurjKhalifaLakeDetail';

const AcRepairInBurjKhalifaLake = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Business Bay"
    ></BreadCumb>
    <AcRepairInBurjKhalifaLakeDetail />
</div>
  )
}

export default AcRepairInBurjKhalifaLake
