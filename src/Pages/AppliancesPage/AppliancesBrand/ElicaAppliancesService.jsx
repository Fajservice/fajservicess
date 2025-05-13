import BreadCumb from "../../../Components/Common/BreadCumb";
import ElicaAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ElicaAppliancesServiceDetail';

const ElicaAppliancesService = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Indesit Washing Machine Repair & Service"
    ></BreadCumb>

    <ElicaAppliancesServiceDetail />        
</div>
  );
};

export default ElicaAppliancesService;
