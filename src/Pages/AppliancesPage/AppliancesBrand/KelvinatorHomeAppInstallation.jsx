import BreadCumb from "../../../Components/Common/BreadCumb";
import KelvinatorHomeAppInstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KelvinatorHomeAppInstallationDetail';

const KelvinatorHomeAppInstallation = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Kelvinator.avif"
        Title="Kelvinator Home Appliances Installation"
      ></BreadCumb>

      <KelvinatorHomeAppInstallationDetail />
    </div>
  );
};

export default KelvinatorHomeAppInstallation;
