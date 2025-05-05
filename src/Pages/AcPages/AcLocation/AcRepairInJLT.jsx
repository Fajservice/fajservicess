import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJLTdETAIL from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJLTdETAIL.JSX';
const AcRepairInJLT = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/air-condition.jpg"
                Title="AC Service and Repair in JLT"
            ></BreadCumb>
            <AcRepairInJLTdETAIL />

        </div>
  )
}

export default AcRepairInJLT
