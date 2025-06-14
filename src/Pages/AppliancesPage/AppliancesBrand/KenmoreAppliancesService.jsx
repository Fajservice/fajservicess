import BreadCumb from "../../../Components/Common/BreadCumb";
import KenmoreAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KenmoreAppliancesServiceDetail';

const KenmoreAppliancesService = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/KENMORE-refrigerator-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/KENMORE-refrigerator-repair-faj.avif"
        Title="Kenmore Appliances Service"
    ></BreadCumb>

    <KenmoreAppliancesServiceDetail />        
</div>
  );
};

export default KenmoreAppliancesService;
