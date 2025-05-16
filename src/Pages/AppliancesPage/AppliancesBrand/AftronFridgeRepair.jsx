import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AftronFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AftronFridgeRepairDetail';
const AftronFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Aftron.avif"
        Title="WE’RE HERE FOR YOU EVERY STEP OF THE WAY."
      ></BreadCumb>

      <AftronFridgeRepairDetail />
    </div>
  )
}

export default AftronFridgeRepair
