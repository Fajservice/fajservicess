import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMizharDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMizharDetail';
const AcRepairInAlMizhar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="Ac Repair & Service in Al Mizhar"
    ></BreadCumb>
    <AcRepairInAlMizharDetail />
</div>
  )
}

export default AcRepairInAlMizhar
