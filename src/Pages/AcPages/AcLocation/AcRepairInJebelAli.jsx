
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJebelAliDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJebelAliDetail';

const AcRepairInJebelAli = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jebel Ali"
    ></BreadCumb>
    <AcRepairInJebelAliDetail />
</div>
  )
}

export default AcRepairInJebelAli
