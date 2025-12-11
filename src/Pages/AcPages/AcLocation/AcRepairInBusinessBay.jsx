
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBusinessBayDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBusinessBayDetail';
const AcRepairInBusinessBay = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Business Bay"
    ></BreadCumb>
    <AcRepairInBusinessBayDetail />
</div>
  )
}

export default AcRepairInBusinessBay
