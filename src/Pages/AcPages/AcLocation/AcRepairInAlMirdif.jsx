
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMirdifDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMirdifDetail';
const AcRepairInAlMirdif = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Mirdif"
      ></BreadCumb>
      <AcRepairInAlMirdifDetail />
    </div>
  )
}

export default AcRepairInAlMirdif
