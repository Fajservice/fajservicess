import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInFlamingoVillasDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInFlamingoVillasDetail';
const AcRepairInFlamingoVillas = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Flamingo Villas"
    ></BreadCumb>
    <AcRepairInFlamingoVillasDetail />
</div>
  )
}

export default AcRepairInFlamingoVillas
