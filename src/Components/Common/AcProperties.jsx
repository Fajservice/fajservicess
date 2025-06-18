

const AcProperties = () => {
    return (
        <section className="section cs_py_30">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cone">
                  <h4 className="cs_fs_20 mb-0">COOLING &amp; HEATING</h4>
                  <span className="mb-5">Stay comfortable all year round</span>
                  <div className="mb-5"></div>
                  <h4 className="cs_fs_20 mb-0">BETTER AIR QUALITY</h4>
                  <span className="mb-5">Reduce humidity, pollen and dust</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-ctwo">

                  <img className="" src={`${import.meta.env.BASE_URL}img/benafit-acimg.jpg`} alt="Ac Service" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cthree">
                  <h4 className="cs_fs_20 mb-0">PROTECT YOUR PROPERTY</h4>
                  <span className="mb-5">Prevent damage to electronics and furnishings</span>
                  <div className="mb-5"></div>
                  <h4 className="cs_fs_20 mb-0">QUIET AND SECURE</h4>
                  <span className="mb-5">No need to leave windows open</span>
                </div>
              </div>
            </div>

          </div>
        </section>
    )
}

export default AcProperties
