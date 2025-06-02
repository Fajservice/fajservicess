import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDownTownDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDownTownDetail';
const AcRepairInDownTown = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Downtown"
    ></BreadCumb>
    <AcRepairInDownTownDetail />
</div>
  )
}

export default AcRepairInDownTown
