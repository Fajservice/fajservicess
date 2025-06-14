import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import LgFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/LgFridgeRepairDetail';
const LgFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/LG-Appliances-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/LG-Appliances-repair-faj.avif"
        Title="LG Washing Machine Repair"
    ></BreadCumb>

    <LgFridgeRepairDetail />     
</div>
  )
}

export default LgFridgeRepair
