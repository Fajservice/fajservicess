import React from 'react'

const HeaderForm = () => {
  return (

    <div className="d-block d-md-none mt-4 p-3 p-sm-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
      <form>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="mb-3">

              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">

              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="mb-3">

              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="mb-3">
              <textarea className="form-control h-100" id="message" rows="5" placeholder="Type your message here..."></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button
              className="cs_btn cs_style_1 rounded"
              style={{ width: '150px', height: '40px' }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default HeaderForm
