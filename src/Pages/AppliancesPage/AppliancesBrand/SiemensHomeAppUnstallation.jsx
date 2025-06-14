import BreadCumb from "../../../Components/Common/BreadCumb";
import SiemensHomeAppUnstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SiemensHomeAppUnstallationDetail';

const SiemensHomeAppUnstallation = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/homeappliancesbrands/siemens-dryer-repair-faj.avif"
                mobileBgImg="img/banners/homeappliancesbrands/mobile/siemens-washing-machine-repair-faj.avif"
                Title="Siemens Home Appliance Repair"
            ></BreadCumb>

            <SiemensHomeAppUnstallationDetail />
        </div>
    );
};

export default SiemensHomeAppUnstallation;