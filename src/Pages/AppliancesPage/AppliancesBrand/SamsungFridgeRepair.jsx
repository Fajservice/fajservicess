import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SamsungFridgeRepairDetail';
const SamsungFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/sumsung.avif"
        Title="Samsung Fridge Repair in Dubai"
      ></BreadCumb>

      <SamsungFridgeRepairDetail />
    </div>
  )
}

export default SamsungFridgeRepair
