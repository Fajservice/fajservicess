import BreadCumb from "../../../Components/Common/BreadCumb";
import ThemadorAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ThemadorAppliancesServiceDetail';

const ThemadorAppliancesService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/homeappliancesbrands/Thermador-appliance-repair-faj.avif"
                Title="Themador Appliances Service"
            ></BreadCumb>

            <ThemadorAppliancesServiceDetail />
        </div>
    );
};

export default ThemadorAppliancesService;
