import BreadCumb from "../../Components/Common/BreadCumb";
import HobRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/HobRepairDetail"

const HobRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Hob-Repair-Service-Dubai.avif"
                mobileBgImg="img/banners/Hob-Repair-Service-Dubai-Mobile.avif"
                Title="Hob Repair Service Dubai"
            ></BreadCumb>

            <HobRepairDetail></HobRepairDetail>
        </div>
    );
};

export default HobRepair;