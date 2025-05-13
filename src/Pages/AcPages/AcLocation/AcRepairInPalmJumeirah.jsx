import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInPalmJumeirahDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInPalmJumeirahDetail';
const AcRepairInPalmJumeirah = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Palm Jumeirah"
    ></BreadCumb>
    <AcRepairInPalmJumeirahDetail />
</div>
  )
}

export default AcRepairInPalmJumeirah
