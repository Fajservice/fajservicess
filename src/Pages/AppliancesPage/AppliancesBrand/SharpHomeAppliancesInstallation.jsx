import BreadCumb from "../../../Components/Common/BreadCumb";
import SharpHomeAppliancesInstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SharpHomeAppliancesInstallationDetail';

const SharpHomeAppliancesInstallation = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/sharp-vacumm-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/sharp-fridge-repair-faj.avif"
        Title="Sharp Home Appliances Installation"
    ></BreadCumb>

    <SharpHomeAppliancesInstallationDetail />        
</div>
  );
};

export default SharpHomeAppliancesInstallation;
