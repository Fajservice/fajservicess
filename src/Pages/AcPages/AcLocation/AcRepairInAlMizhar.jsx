
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMizharDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMizharDetail';
const AcRepairInAlMizhar = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="Ac Repair & Service in Al Mizhar"
      ></BreadCumb>
      <AcRepairInAlMizharDetail />
    </div>
  )
}

export default AcRepairInAlMizhar
