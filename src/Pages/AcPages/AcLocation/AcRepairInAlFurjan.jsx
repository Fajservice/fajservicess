import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlFurjanDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlFurjanDetail';

const AcRepairInAlFurjan = () => {
  return (
<div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Furjan"
    ></BreadCumb>
    <AcRepairInAlFurjanDetail />
</div>
  )
}

export default AcRepairInAlFurjan
