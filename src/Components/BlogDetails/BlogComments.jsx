const BlogComments = () => {
    return (
         <div className="cs_comments_area">
            {/* <h2 className="cs_fs_30 cs_mb_28">{blogPost.comments} Comments</h2> */}
            <ul className="cs_comment_list cs_heading_font cs_mp_0">
            <li className="cs_comment_body position-relative">
                <div className="cs_comment_thumbnail">
                <img src={`${import.meta.env.BASE_URL}/img/avatar_9.jpg`} alt="Image" />
                </div>
                <div className="cs_comment_info">
                <h3 className="cs_fs_20 cs_semibold cs_mb_9">Leslie Alexander</h3>
                <div className="cs_post_meta cs_fs_14 cs_mb_9">
                    <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                    <span className="cs_heading_color">10 Oct, 2024</span>
                </div>
                <p className="mb-0">Most repairs can be completed within a few hours, but complex issues might take longer. We always aim a for same-day service when possible.</p>
                <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                </div>
            </li>
            <li className="cs_comment_body position-relative">
                <div className="cs_comment_thumbnail">
                <img src={`${import.meta.env.BASE_URL}/img/avatar_10.jpg`} alt="Image" />
                </div>
                <div className="cs_comment_info">
                <h3 className="cs_fs_20 cs_semibold cs_mb_9">Cameron Williamson</h3>
                <div className="cs_post_meta cs_fs_14 cs_mb_9">
                    <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                    <span className="cs_heading_color">15 Oct, 2024</span>
                </div>
                <p className="mb-0">We offer free estimates before any repairs begin, so you know exactly what to expect on all part and labor, ensuring your peace of mind.</p>
                <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                </div>
            </li>
            <li className="cs_comment_body position-relative">
                <div className="cs_comment_thumbnail">
                <img src={`${import.meta.env.BASE_URL}/img/avatar_11.jpg`} alt="Image" />
                </div>
                <div className="cs_comment_info">
                <h3 className="cs_fs_20 cs_semibold cs_mb_9">Darlene Robertson</h3>
                <div className="cs_post_meta cs_fs_14 cs_mb_9">
                    <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                    <span className="cs_heading_color">20 Oct, 2024</span>
                </div>
                <p className="mb-0">Tire rotation is typically recommended every 6,000 to 8,000 miles to ensure even wear and extend the life of your tires  more serious that needs attention.</p>
                <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                </div>
            </li>
            </ul>
            <div className="cs_height_50 cs_height_lg_50"></div>
            <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
            <h3 className="cs_fs_30 cs_mb_13">Leave a Reply</h3>
            <p className="cs_mb_22">Your email Address Not Be Published. Requied Fields are Marked</p>
            <form className="row cs_row_gap_30 cs_gap_y_30">
                <div className="col-sm-6">
                <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
                </div>
                <div className="col-sm-6">
                <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
                </div>
                <div className="col-sm-12">
                <input type="text" name="website" placeholder="Enter Website" className="cs_form_field cs_white_bg" />
                </div>
                <div className="col-sm-12">
                <textarea name="comment" rows="6" placeholder="Enter Your Comments" className="cs_form_field cs_white_bg"></textarea>
                </div>
                <div className="col-sm-12">
                <button type="submit" className="cs_btn cs_style_1 w-100"><span>Submit</span></button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default BlogComments;