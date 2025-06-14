import BreadCumb from "../../../Components/Common/BreadCumb";
import TekaHomeAppInstllationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/TekaHomeAppInstllationDetail';

const TekaHomeAppInstllation = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/teka-appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/teka-appliance-repair-faj.avif"
        Title="Teka Home Appliances Installations"
    ></BreadCumb>

    <TekaHomeAppInstllationDetail />        
</div>
  );
};

export default TekaHomeAppInstllation;
