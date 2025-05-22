import BreadCumb from "../../../Components/Common/BreadCumb";
import SiemensHomeAppUnstallationDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SiemensHomeAppUnstallationDetail';

const SiemensHomeAppUnstallation = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/homeappliancesbrands/Siemens-washing-machine-repai-faj.avif"
                Title="Siemens Home Appliance Repair"
            ></BreadCumb>

            <SiemensHomeAppUnstallationDetail />
        </div>
    );
};

export default SiemensHomeAppUnstallation;