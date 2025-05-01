import BreadCumb from "../../../Components/Common/BreadCumb";
import WhiteWestinghouseAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/WhiteWestingHouseAcRepairDetail";

const WhiteWestingHouseAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/white-westinghouse-ac-repair.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="White Westinghouse AC Repair Service in Dubai"
            ></BreadCumb> 
            <WhiteWestinghouseAcRepairDetail></WhiteWestinghouseAcRepairDetail>           
        </div>
    );
};

export default WhiteWestingHouseAcRepair;