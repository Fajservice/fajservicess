
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlaweerDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlaweerDetail';
const AcRepairInAlaweer = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Aweer"
      ></BreadCumb>
      <AcRepairInAlaweerDetail />
    </div>
  )
}

export default AcRepairInAlaweer
