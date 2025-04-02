
const Form1 = () => {
    return (
        <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form">
        <div className="col-sm-6">
          <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_radius_5" />
        </div>
        <div className="col-sm-6">
          <input type="email" name="email" placeholder="Your Email" className="cs_form_field cs_radius_5" />
        </div>
        <div className="col-sm-6">
          <input type="text" name="subject" placeholder="Subject" className="cs_form_field cs_radius_5" />
        </div>
        <div className="col-sm-6 position-relative">
          <select className="form-select cs_form_field cs_radius_5">
            <option selected disabled>Choose an option</option>
            <option value="Air Conditioning Maintenance Service">Air Conditioning Maintenance Service</option>
            <option value="Home Appliances Repair Service">Home Appliances Repair Service</option>
            <option value="Baumatic Appliances Repair Service">Baumatic Appliances Repair Service</option>
            <option value="Commercial Appliances Service">Commercial Appliances Service</option>
            <option value="Freezer Maintenance Service">Freezer Maintenance Service</option>
            <option value="Food Chiller Service">Food Chiller Service</option>
            <option value="AMC Service">AMC Service</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-12">
         <textarea name="message" rows="6" placeholder="Message" className="cs_form_field"></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
            <span>Submit</span><i className="bi bi-arrow-right"></i>  
          </button>
        </div>
      </form>
    );
};

export default Form1;