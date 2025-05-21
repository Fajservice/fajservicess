import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import VikingAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/VikingAppliancesServiceDetail';
const VikingAppliancesService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/VIKING-refrigerator-repair-faj.avif"
        Title="Viking Appliances Service"
      ></BreadCumb>

      <VikingAppliancesServiceDetail />
    </div>
  )
}

export default VikingAppliancesService