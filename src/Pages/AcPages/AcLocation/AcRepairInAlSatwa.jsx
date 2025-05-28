import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlSatwaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlSatwaDetail';
const AcRepairInAlSatwa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Satwa"
    ></BreadCumb>
    <AcRepairInAlSatwaDetail />
</div>
  )
}

export default AcRepairInAlSatwa
