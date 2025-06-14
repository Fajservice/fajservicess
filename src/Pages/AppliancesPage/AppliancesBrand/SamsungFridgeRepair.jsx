import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SamsungFridgeRepairDetail';
const SamsungFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/samsung-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/samsung-appliance-repair-faj.avif"
        Title="Samsung Home Appliance Repair Service and Installation"
      ></BreadCumb>

      <SamsungFridgeRepairDetail />
    </div>
  )
}

export default SamsungFridgeRepair
