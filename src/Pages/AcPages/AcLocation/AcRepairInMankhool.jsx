
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMankhoolDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMankhoolDetail';
const AcRepairInMankhool = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Mankhool"
    ></BreadCumb>
    <AcRepairInMankhoolDetail />
</div>
  )
}

export default AcRepairInMankhool
