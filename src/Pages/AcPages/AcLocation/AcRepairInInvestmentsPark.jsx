import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInInvestmentsParkDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInInvestmentsParkDetail';
const AcRepairInInvestmentsPark = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Dubai Investment Park"
    ></BreadCumb>
    <AcRepairInInvestmentsParkDetail />
</div>
  )
}

export default AcRepairInInvestmentsPark
