
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInGardensDetails from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInGardensDetails';

const AcRepairInGardens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Gardens"
    ></BreadCumb>
    <AcRepairInGardensDetails />
</div>
  )
}

export default AcRepairInGardens
