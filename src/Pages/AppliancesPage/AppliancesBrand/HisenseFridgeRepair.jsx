import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import HisenseFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/HisenseFridgeRepairDetail';
const HisenseFridgeRepair = () => {
  return (
     <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/hisense-refrigerator-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/hisense-fridge-repair-faj.avif"
        Title="Hisense Fridge Repair"
    ></BreadCumb>

    <HisenseFridgeRepairDetail />     
</div>
  )
}

export default HisenseFridgeRepair
