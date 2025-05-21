import BreadCumb from "../../../Components/Common/BreadCumb";
import TekaHomeAppInstllationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/TekaHomeAppInstllationDetail';

const TekaHomeAppInstllation = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/teka-appliance-repair-faj.avif"
        Title="Teka Home Appliances Installations"
    ></BreadCumb>

    <TekaHomeAppInstllationDetail />        
</div>
  );
};

export default TekaHomeAppInstllation;
