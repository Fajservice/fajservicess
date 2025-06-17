import { Link } from "react-router-dom";
import data from '../../Data/services1.json';
import { Helmet, HelmetProvider } from "react-helmet-async";


const Services3 = ({titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "FAJ appliances Repair In Dubai");
    const metadescription = String(description || "FAJ, established in 2010, offers expert appliances repair in Dubai. Skilled technicians ensure quality service for all major brands and types.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/dist/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/services/").replace(/\/?$/, '/');

    return (
        <>
            <HelmetProvider>
                           <Helmet>
                               <title>{metatitle}</title>
                               <meta name="description" content={metadescription} />
                               <meta name="keywords" content={metaKeyword} />
                               <meta name="author" content={metaAuthor} />
                               <meta name="robots" content="index, follow" />
           
                               <link rel="canonical" href={metaURL} />
                               <meta property="og:type" content="website" />
                               <meta property="og:locale" content="en_US" />
                               <meta property="og:title" content={metatitle} />
                               <meta property="og:description" content={metadescription} />
                               <meta property="og:url" content={metaURL} />
                               <meta property="og:image" content={metaImage} />
           
                               {/* Twitter Card */}
                               <meta name="twitter:card" content="summary_large_image" />
                               <meta name="twitter:title" content={metatitle} />
                               <meta name="twitter:description" content={metadescription} />
                               <meta name="twitter:image" content={metaImage} />
                               <meta name="twitter:url" content={metaURL} />
                           </Helmet>
                       </HelmetProvider>
        <section>
        <div className="cs_height_80 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, index)=>(
            <div key={index} className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_1">
                <div className="cs_card_thumbnail">
                <img src={`${import.meta.env.BASE_URL}${item.img}`} alt="Service Image" />
                </div>
                <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                  <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                  <img src={`${import.meta.env.BASE_URL}${item.icon}`} alt="Service Icon" />
                  </div>
                  <h1 className="cs_card_title cs_fs_24 cs_mb_8">
                  <Link to={item.btnLink}>{item.title}</Link>
                  </h1>
                  <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                  <Link to={item.btnLink} className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                    <span className="cs_btn_text text-uppercase">{item.btnText}</span>
                    <span className="cs_btn_icon cs_center">
                    <i className="bi bi-arrow-right"></i>
                    <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
        ))}

          </div>
        </div>
        <div className="cs_height_80 cs_height_lg_80"></div>
      </section>
      </>
    );
};

export default Services3;