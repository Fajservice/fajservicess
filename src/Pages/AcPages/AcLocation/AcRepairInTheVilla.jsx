import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheVillaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheVillaDetail';
const AcRepairInTheVilla = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Villa"
    ></BreadCumb>
    <AcRepairInTheVillaDetail />
    </div>
  )
}

export default AcRepairInTheVilla
