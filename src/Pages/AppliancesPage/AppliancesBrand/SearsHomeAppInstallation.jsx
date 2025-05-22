import BreadCumb from "../../../Components/Common/BreadCumb";
import SearsHomeAppInstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SearsHomeAppInstallationDetail';

const SearsHomeAppInstallation = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Sears-appliance-repair-faj.avif"
        Title="Sears Home Appliances Installation Services in Dubai"
      ></BreadCumb>

      <SearsHomeAppInstallationDetail />
    </div>
  );
};

export default SearsHomeAppInstallation;
