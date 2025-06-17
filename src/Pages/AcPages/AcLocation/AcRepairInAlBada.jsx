import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBadaDetail from "../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBadaDetail";
const AcRepairInAlBada = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Badaa"
      ></BreadCumb>
      <AcRepairInAlBadaDetail />
    </div>
  )
}

export default AcRepairInAlBada
