
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMudonDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMudonDetail';
const AcRepairInMudon = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Mudon"
    ></BreadCumb>
    <AcRepairInMudonDetail />
</div>
  )
}

export default AcRepairInMudon
