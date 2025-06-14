import BreadCumb from "../../../Components/Common/BreadCumb";
import SearsHomeAppInstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SearsHomeAppInstallationDetail';

const SearsHomeAppInstallation = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/sears-oven-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/sears-cooker-repair-faj.avif"
        Title="Sears Home Appliances Installation Services in Dubai"
      ></BreadCumb>

      <SearsHomeAppInstallationDetail />
    </div>
  );
};

export default SearsHomeAppInstallation;
