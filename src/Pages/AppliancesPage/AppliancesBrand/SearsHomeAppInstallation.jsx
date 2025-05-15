import BreadCumb from "../../../Components/Common/BreadCumb";
import SearsHomeAppInstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SearsHomeAppInstallationDetail';

const SearsHomeAppInstallation = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Sears.avif"
        Title="Sear sHome Appliances Installation"
    ></BreadCumb>

    <SearsHomeAppInstallationDetail />        
</div>
  );
};

export default SearsHomeAppInstallation;
