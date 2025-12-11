
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMamzarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMamzarDetail';
const AcRepairInAlMamzar = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Repair and Service in Al Mamzar"
      ></BreadCumb>
      <AcRepairInAlMamzarDetail />
    </div>
  )
}

export default AcRepairInAlMamzar
