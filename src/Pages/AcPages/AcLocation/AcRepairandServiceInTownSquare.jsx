import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairandServiceInTownSquareDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairandServiceInTownSquareDetail';
const AcRepairandServiceInTownSquare = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Repair & Service in Town Square"
    ></BreadCumb>
    <AcRepairandServiceInTownSquareDetail />
</div>
  )
}

export default AcRepairandServiceInTownSquare
