import BreadCumb from "../../../Components/Common/BreadCumb";
import ElicaAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ElicaAppliancesServiceDetail';

const ElicaAppliancesService = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/elica-hood-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/elica-hood-repair-faj.avif"
        Title="Elica Appliances Service - Elica Hob Repair - Hood Fixing"
    ></BreadCumb>

    <ElicaAppliancesServiceDetail />        
</div>
  );
};

export default ElicaAppliancesService;
