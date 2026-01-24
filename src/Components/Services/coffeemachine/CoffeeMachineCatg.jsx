
import AcRepairService from '../../Buttons/AcRepairService'
import AMCbutton from '../../Buttons/AMCbutton'

const CoffeeMachineCatg = ({subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL}) => {
  return (
    <>
        <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Air Conditioning Maintenance, Repair and Servicing in Dubai</h1>
            <p>FAJ Technical Services L.L.C. is a leading provider of air conditioning installation, repair, and maintenance services in Dubai. We offer comprehensive solutions to keep your facility cool in the summer and warm in the winter. With experience since 2010, we ensure your Air Conditioning systems operate at optimum energy efficiency. Our services help reduce the possibility of breakdowns, ultimately saving you money and time.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <AcRepairService />
                <AMCbutton />
              </div>
            </div>
          </div>
        </section>
        </div>
    </>
  )
}

export default CoffeeMachineCatg