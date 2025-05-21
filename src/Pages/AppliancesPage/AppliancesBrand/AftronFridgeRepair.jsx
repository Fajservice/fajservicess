import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AftronFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AftronFridgeRepairDetail';
const AftronFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Aftron-Fridge-repair-faj.avif"
        Title="Aftron Appliance Repair Services Dubai"
      ></BreadCumb>

      <AftronFridgeRepairDetail />
    </div>
  )
}

export default AftronFridgeRepair
