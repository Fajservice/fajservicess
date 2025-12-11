
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheSpringsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheSpringsDetail';
const AcRepairInTheSprings = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Springs"
    ></BreadCumb>
    <AcRepairInTheSpringsDetail />
</div>
  )
}

export default AcRepairInTheSprings
