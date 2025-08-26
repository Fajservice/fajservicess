import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/AcData/AcFaqs/AcServiceInDubaiArabicDetailFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

import 'swiper/swiper-bundle.css';
import testimonial_data from '../../Data/AcData/AcTestimonial/AcServiceTestimonials.json';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../Headeform/HeaderForm";
import GetQuoteButton from "../Buttons/GetQuoteButton";
import Testimonial1 from "../Testimonial/Testimonial1";

const AcServiceInDubaiArabicDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "تصليح مكيفات - شركة تنظيف مكيفات في دبي - فني تكييف قريب مني");
  const metadescription = String(description || "فأج احصل على أفضل خدمة تصليح مكيفات في دبي · خدمة المكيف السبليت ·تصليح مكيفات مركزي تصليح مكيفات أفضل شركات تصليح مكيفات تصليح مكيفات · صيانة مكيفات المنزلية · غسيل المكيفات المركزية");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "خدمة التكييف، صيانة التكييف، خدمة تكييف الهواء، إصلاح التكييف، صيانة التكييف في دبي، فني تكييف، تنظيف التكييف، شركة تكييف في دبي، أفضل خدمة تكييف، أسعار صيانة التكييف");
  const metaURL = String(URL || "https://www.fajservices.ae/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/dist/img/What-is-covered-in-an-AC-Maintenance-Contract.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription}></meta>
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:url" content={metaURL} />
        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <style>{`
            .cs_slider.cs_style_2 {
                width: calc(100% + 0px);
            }
      `}</style>
      <div className="cs_service_details" dir="rtl">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">تصليح مكيفات دبي</h1>
            <p>وداعًا لأيام الصيف الحارة ولياليها الخانقة ومسببات الحساسية. أهلاً بكم في راحة طوال العام، وهواء نقي منعش، ونوم هانئ. رائع، أليس كذلك؟<br /><a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">شركة اف ايه جيه للخدمات الفنية ش.ذ.م.م.</a> تعمل منذ عام ٢٠١٠. يتمتع فريقنا المتخصص بخبرة واسعة في خدمات تنظيف وصيانة وإصلاح مكيفات الهواء، بالإضافة إلى خدمات تكييف الهواء القريبة مني، وتركيب مكيفات الهواء لمختلف وحدات التكييف السكنية والتجارية في دبي والشارقة.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* Experts AC Service and Maintenance */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">

                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >تصليح مكيفات</h2>
                <p className="mb-1">يصعب علينا في معظم الأوقات تحمّل درجات الحرارة المرتفعة حتى ولو لبضع دقائقٍ فقط! لهذا فإن وجود المكيفات يعد ضرورة حتمية لا بد منها خصوصاً في دولة الإمارات! إذ يعد المكيف من أساسيات تحضير المنزل لفصل الصيف، لكن كغيره من الأجهزة الكهربائية قد يتعرض لبعض الأعطال التي تنعكس سلباً على عمله بكفاءة، حتى وإن اخترت أفضل انواع المكيفات في دبي. في حال تعرض المكيف لأي عطل مفاجئ يمكنك التواصل مع ارقام تصليح مكيفات في دبي التي تتولى أمر إصلاح أي أعطال فوراً
سواء كانت مروحة المكيف تصدر أصواتاً غريبة أو كان المكيف لا يبرّد بشكل صحيح، فإن شركة. أفضل خدمة لتنظيف التكييف ومجاري الهواء وإصلاحها وصيانتها وتركيبها في المنازل او المكاتب. أفضل شركة صيانة المكيفات في دبي</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>تكييف الهواء لا يعمل</li>
<li>تكييف الهواء تسرب المياه للخارج</li>
<li>فقدان أداء التكييف</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
<li>تكييف الهواء لديه تدفق هواء ضعيف ، مما يتسبب في حدوث ضوضاء</li>
<li>تكييف الهواء عرضة للتجميد</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Experts-AC-Service-and-Maintenance.avif`} alt="Experts AC Service and Maintenance" loading="lazy" />

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>إذا كنت ترغب بزيارة في نفس اليوم، يُرجى الحجز قبل الساعة ١٢ ظهرًا. سيتم تحديد المواعيد بعد الساعة ١٢ ظهرًا لليوم التالي حسب التوافر. للاستفسار عن رسوم الفحص الفني/الاستدعاء، أو خدمة تكييف الهواء القريبة منك، أو الإصلاح، أو الصيانة، يُرجى الضغط أدناه. لحجز موعد، يمكنك الاتصال بنا أو التواصل معنا عبر واتساب على الرقم +971 50 746 4712.</p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 faq-Section">
    <div className="container">
        <div className="serviceDetails">
            <div className="row">
                <div className="col-sm-12">
                    <div className="inner-acsvs-dis-sec">
                        <p className="acsvs-dis-sec-inner-p text-center mb-0">كم تكلفة خدمة تنظيف التكييف الممتازة، وإصلاح التكييف وصيانته؟</p>
                        <Link to="/dubai-ac-service-price-list/">تحقق من الأسعار هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">لماذا تعتبر خدمة صيانة المكيفات مهمة في دبي؟</h2>
            <p>صيانة مكيفات الهواء بانتظام في دبي ضرورية لضمان الأداء الأمثل. تقدم اف ايه جيه خدمات شاملة لضمان كفاءة نظامك. بفضل نهجنا الاستباقي، كن على ثقة بأن مكيف الهواء يعمل بكفاءة عالية. إذا كنت بحاجة إلى صيانة مكيفات الهواء وخدمة تكييف بالقرب منك، تواصل معنا.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/What-is-covered-in-an-AC-Maintenance-Contract.avif`} alt="Ac Maintenance in dubai" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>الطقس القاسي:</strong> درجات حرارة مرتفعة تتجاوز 40 درجة مئوية (104 درجات فهرنهايت) في الصيف. الصيانة الدورية تحافظ على كفاءة أنظمة تكييف الهواء خلال هذه الظروف.</li>
<li><strong>كفاءة الطاقة:</strong> وحدة تكييف الهواء التي تتم صيانتها جيدًا تعمل بكفاءة أعلى، وتستهلك طاقة أقل، وتخفض فواتير الكهرباء.</li>
<li><strong>عمر أطول للمعدات:</strong> الصيانة الدورية تُطيل عمر وحدة تكييف الهواء لديك، مما يقلل الحاجة إلى الإصلاحات والاستبدالات المكلفة، مما يوفر لك المال في نهاية المطاف.</li>
<li><strong>جودة هواء أفضل:</strong> الصيانة الدورية تمنع تراكم الغبار ومسببات الحساسية، مما يضمن هواءً أنظف.</li>
<li><strong>راحة مُعززة:</strong> تضمن الصيانة الدورية لمكيفات الهواء في دبي الراحة والكفاءة والتبريد المستمر يوميًا.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
                {/* المشاكل الشائعة في التكييف التي قد تتطلب صيانة */}
        <section className="section cs_py_30" dir="rtl">
          <div className="container">
            <h2 className="text-center">المشاكل الشائعة في التكييف التي قد تتطلب صيانة</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">ضعف تدفق الهواء</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">إذا لاحظت <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>انخفاض تدفق الهواء</b></a> من الفتحات، فقد يشير ذلك إلى مشكلة في نظام التكييف مثل فلتر مسدود أو مروحة معطلة.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">هواء دافئ</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">إذا كان التكييف يخرج هواءً دافئًا أو بدرجة حرارة الغرفة بدلاً من الهواء البارد، فقد يشير ذلك إلى مشاكل في الضاغط أو المبرد أو مجاري الهواء.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">أصوات غريبة</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">الأصوات غير المعتادة مثل الطحن، الصرير، أو الطرق القادمة من وحدة التكييف قد تشير إلى مشاكل ميكانيكية تحتاج إلى عناية.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">روائح كريهة</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">الروائح العفنة أو الكريهة المنبعثة من الفتحات قد تشير إلى نمو العفن أو العفن الفطري داخل النظام، مما يحتاج إلى معالجة سريعة.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">تشغيل متكرر</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">قد يشير ذلك إلى صعوبة في الحفاظ على درجات الحرارة المطلوبة بسبب مشاكل مثل الفلاتر المتسخة، انخفاض مستويات المبرد، أو ثرموستات معطوب.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">ارتفاع مستويات الرطوبة</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">مكيف الهواء الذي يفشل في تقليل مستويات الرطوبة الداخلية بشكل كافٍ قد يشير إلى مشاكل في سعة التبريد أو التشغيل غير السليم.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">تسرب المياه</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">تجمع المياه حول المكيف أو تسربها من الفتحات قد يشير إلى انسداد في مصرف المكثفات، تجمد الملفات، أو مشاكل أخرى.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">زيادة فواتير الطاقة</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">ارتفاع فواتير الطاقة دون زيادة في الاستخدام قد يشير إلى عدم كفاءة مكيف الهواء بسبب الفلاتر المتسخة، تسريبات في مجاري الهواء، أو مشاكل أخرى.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* دليل سريع لفهم وإصلاح مشاكل التكييف */}
        <section className="section cs_py_30 bg-light-gray">
    <div className="container">
        <h2 className="cs_fs_30">الخدمات التي نقدمها لأنظمة تكييف الهواء</h2>
        <div className="row">
            <div className="col-xl-6">
                <iframe
                    className="bordered-img blue-border"
                    width="100%"
                    height="350"
                    src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w"
                    title="مشغل فيديو YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="col-xl-6">
                <p className='mb-0'>نحن متخصصون في جميع أنواع وماركات أنظمة التكييف والتهوية، بما في ذلك وحدات معالجة الهواء.</p>
                <p className='mb-0'><strong>تشمل خدماتنا:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">

                    <li>
                        <strong>التثبيت:</strong> تركيب خبير لأنواع وماركات مختلفة من أنظمة التكييف، مع ضمان الأداء الأمثل والكفاءة.
                    </li>

                    <li>
                        <strong>التشخيص:</strong> فحص شامل لاكتشاف الأعطال وتشخيص المشكلات بشكل فعال. نقدم تقييمات للأهلية وعروض أسعار مفصلة لمعالجة أي مشاكل في نظامك.
                    </li>

                    <li>
                        <strong>خدمة الإصلاح:</strong> خدمات إصلاح فعالة لجميع مكونات أنظمة التكييف، مع ضمان حل سريع لأي مشاكل مثل التسريبات، الأعطال الكهربائية، وخلل النظام. لا تتردد في التواصل إذا كنت بحاجة إلى خدمات محددة أو لديك أي أسئلة!
                    </li>

                    <li>
                        <strong>عقد الصيانة السنوية:</strong> يحدد هذا العقد الشروط والخدمات المشمولة في الصيانة السنوية لوحدات تكييف الهواء. الصيانة الدورية ضرورية للأداء الأمثل، الكفاءة، وإطالة عمر نظام التكييف الخاص بك.
                    </li>

                    {/* <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check"></i></span>
                        <span>صيانة دورية</span>
                    </li>
                    <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check"></i></span>
                        <span>تنظيف خطوط الصرف</span>
                    </li>
                    <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check"></i></span>
                        <span>فحص وتركيب التكييف
                        </span>
                    </li>

                    <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check"></i></span>
                        <span>إصلاح تسريبات المبرد، الماء، أو مجاري الهواء</span>
                    </li> */}

                </ul>
            </div>
        </div>
    </div>
</section>

        {/* فوائد الصيانة الدورية للتكييف */}
        <section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">فوائد الصيانة الدورية لتكييف الهواء في دبي
                </h2>

                <div className="row mt-4 gx-4 gy-4">
                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/cooling1.jpg`} alt="كفاءة التبريد" className="img-fluid rounded-circle border border-4 border-info" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">كفاءة التبريد</h3>
                            <p className="small">نقوم بإجراء تقييم كامل لكفاءة التبريد باستخدام مسدس قياس الحرارة.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/disinfection.jpg`} alt="تعقيم المكونات" className="img-fluid rounded-circle border border-4 border-warning" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">تعقيم المكونات</h3>
                            <p className="small">يتم اختبار وتعقيم جميع المكونات المادية بما في ذلك الفلاتر وفتحات التهوية.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/fan.jpg`} alt="تقييم المروحة" className="img-fluid rounded-circle border border-4 border-success" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">تقييم المروحة</h3>
                            <p className="small">نتأكد من عمل المروحة بشكل صحيح دون أي انسدادات في ملف المبخر.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/thermo.jpg`} alt="فحص الترموستات" className="img-fluid rounded-circle border border-4 border-primary" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">فحص الترموستات</h3>
                            <p className="small">نستخدم مقياس حرارة ليزري للتأكد من عمل الترموستات بشكل صحيح.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/airflow.jpg`} alt="توازن تدفق الهواء" className="img-fluid rounded-circle border border-4 border-danger" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">توازن تدفق الهواء</h3>
                            <p className="small">نضمن لك الحصول على تدفق هواء مثالي في كل غرفة حسب الحاجة.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}img/icons/customer.jpg`} alt="ملاحظات العملاء" className="img-fluid rounded-circle border border-4 border-secondary" />
                            </div>
                            <h3 className="text-uppercase mb-2 fs-6 text-white">ملاحظات العملاء</h3>
                            <p className="small">يقدم فريقنا ملاحظات مهمة عن حالة التكييف وأي إصلاحات مطلوبة.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-4">
                </div>
            </div>
        </div>
    </div>
</section>

        {/* لماذا تختارنا لخدمات التكييف */}
        <section className="section cs_py_30" dir="ltr">
      <div className="container container-md container-sm">
        <h2 className="my-3 why-choose-h2 text-center mb-3">اخترنا لخدمة موثوقة واستثنائية مصممة خصيصًا لاحتياجاتك!</h2>
        <div className="usps align-items-center">
          {/* <!-- العمود الأول --> */}
          <div className="uspcol col-1">
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="خدمة سريعة وموثوقة" />
              </div>
              <div className="usptext">
                <h3 className="">موثوقة، أولوية، وسريعة</h3>
                <p>يمكنك الاعتماد على <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>خدمة فعالة</b></a>! زيارة الإصلاح في نفس اليوم أو الخدمة في اليوم التالي تضمن تلبية احتياجاتك بسرعة.</p>
              </div>
            </div>

            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="نحن خبراء" />
              </div>
              <div className="usptext">
                <h3 className="">شعور بالطمأنينة</h3>
                <p>مع <a href="/ac-annual-maintenance-contract/">عقد الصيانة السنوية</a>، تحصل على خدمة كاملة لمدة عام، مما يضمن عمل التكييف بسلاسة ويوفر راحة البال.
                </p>
              </div>
            </div>

            <div className="uspitem mb-0">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="خدمة أيقونة FAJ" />
              </div>
              <div className="usptext">
                <h3 className="">أنت تحت السيطرة</h3>
                <p>اختر يومًا ووقتًا لإصلاح التكييف في دبي أو الشارقة. مع نافذة زمنية من 3-4 ساعات لوصول الفني.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- قسم الفاصل --> */}
          <div className="uspdelimit col-2 d-none d-xl-block">
            <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="خدمات صيانة التكييف" />
          </div>

          {/* <!-- العمود الثاني --> */}
          <div className="uspcol col-3">
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="خدمة أيقونة FAJ" />
              </div>
              <div className="usptext">
                <h3 className="">نحن خبراء</h3>
                <p>نحن خبراء في إصلاح التكييف. لهذا السبب تثق معظم العلامات التجارية الكبرى بنا للتعامل مع احتياجات الخدمة والصيانة لديها.</p>
              </div>
            </div>
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="خدمة أيقونة FAJ" />
              </div>
              <div className="usptext">
                <h3 className="">قيمة رائعة</h3>
                <p>نحن ملتزمون بضمان رضا العملاء من خلال الخدمة في الوقت المحدد، وحل المشكلات بسرعة، وأسعار معقولة.</p>
              </div>
            </div>
            <div className="uspitem mb-0">
              <div className="uspicon">
                <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="خدمة أيقونة FAJ" />
              </div>
              <div className="usptext">
                <h3 className="">جدير بالثقة</h3>
                <p>فنيو التكييف <a href="https://www.facebook.com/ACRepairUAE"><b>الماهرون لدينا</b></a> مدربون تدريباً عالياً، ونقدم خدمة ممتازة لمجموعة متنوعة من علامات التكييف الكبرى بكفاءة.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- فاصل للجوال --> */}
        <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
          <img className="blue-border-2 w-100" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="خدمات صيانة التكييف" />
        </div>
      </div>
    </section>

        {/* نحن متخصصون في خدمات تكييف الهواء للعلامات التجارية التالية */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">خدمة إصلاح التكييف السريعة والطارئة</h3>
            <p className="mb-2"><b>الشروط والأحكام:</b> هناك رسوم استدعاء تتراوح بين 195 و320 درهم إماراتي حسب السعة، لكل تشخيص. الزيارات في نفس اليوم متاحة للحجوزات التي تتم قبل *12:00 ظهرًا. للحجوزات بعد 12:00 ظهرًا، قد يتم ترتيب الزيارات في اليوم التالي، حسب التوفر.</p>
            <p className="pt-3 border-small-top"><strong>اختر اف ايه جيه لراحة بالك</strong><br />
              <b>نقدم ضمان خدمة لمدة شهرين</b><br />
              و <small>ضمان قطع غيار لمدة 3 أشهر</small> كمعيار.</p>
            <h3>نحن متخصصون في خدمات تكييف الهواء للعلامات التجارية التالية</h3>

            <ul className="mb-0">
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-ac-repair-in-dubai/">خدمة تكييف LG:</a></strong> تقدم اف ايه جيه خدمة إصلاح تكييف LG موثوقة في دبي. مع محترفين خبراء في وحدات التقسيم، vrf، والتكييف المركزي. احصل على خدمة تكييف سريعة وموثوقة بالقرب مني، إصلاح تكييف، وصيانة تكييف في دبي.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-ac-repair-in-dubai/">إصلاح وخدمة تكييف Samsung:</a></strong> مقرنا في دبي، اف ايه جيه هو وجهتك المفضلة لإصلاح تكييف Samsung في دبي. متخصصون في أنظمة تكييف Samsung، نقدم خدمة شاملة تتراوح من إصلاح التكييف إلى خدمة تنظيف التكييف وصيانة التكييف.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">خدمة وإصلاح تكييف York:</a></strong> يضمن إصلاح وخدمة تكييف York أنك لست بحاجة للقلق لأنك في المكان الصحيح. نعم، اف ايه جيه هو المكان الذي يتم فيه إعطاء الأولوية للكفاءة والموثوقية، وتقديم خدمات تكييف الهواء بالقرب مني، خدمة تنظيف التكييف، وإصلاح التكييف.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">صيانة تكييف Daikin:</a></strong> اعتمد على فريقنا ذو الخبرة لمعالجة أي تحديات تواجهها مع وحدة تكييف Daikin الخاصة بك بشكل سريع وفعال. نحن متخصصون في خدمة تنظيف التكييف وإصلاح التكييف في دبي لضمان عملها بأفضل أداء، وتوفير بيئة باردة ومريحة عندما تحتاج إليها.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">إصلاح Trane HVAC:</a></strong> مع خبرة متعمقة في إصلاح أنظمة تكييف الهواء Trane، نقدم خدمات تنظيف تكييف شاملة مصممة لضمان عمل الوحدة بأعلى كفاءة. خدمات صيانة وإصلاح تكييف Trane المتخصصة متاحة بسهولة في منطقتك، وتقديم حلول سريعة وفعالة للحفاظ على عمل نظام تكييف الهواء الخاص بك بسلاسة وموثوقية. سواء كنت بحاجة إلى صيانة روتينية أو إصلاح عاجل، نحن هنا لمساعدتك في الحفاظ على بيئة مريحة في منزلك أو عملك.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">خدمة وإصلاح تكييف Panasonic:</a></strong> بغض النظر عن المشكلة في مكيف الهواء Panasonic الخاص بك، يمكن لفنيينا المهرة في دبي والشارقة تشخيصها وإصلاحها بسرعة. نقدم خدمات تكييف هواء موثوقة بالقرب مني وإصلاح تكييف في منطقتك، مما يضمن عودة نظامك للعمل بسلاسة مرة أخرى.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/gree-ac-repair-in-dubai/">خدمة وصيانة تكييف Gree:</a></strong> هل وحدة تكييف الهواء الخاصة بك لا تعمل بشكل صحيح، أو هل ترى خطأ Gree AC معروضًا على الشاشة؟ لم يعد عليك التعامل مع درجات حرارة غير مريحة أو هواء راكد. في FAJ، نحن متخصصون في استعادة تكييف Gree الخاص بك إلى الأداء الأمثل بسرعة. تضمن خدمات إصلاح وصيانة تكييف الهواء الموثوقة لدينا أن نظامك يعمل بكفاءة وفعالية، مما يمنع أي ضرر إضافي وانزعاج. سواء كنت بحاجة إلى خدمات إصلاح تكييف خبير، خدمات صيانة تكييف روتينية، أو خدمات تكييف هواء شاملة في دبي، نحن نغطي احتياجاتك! استمتع ببيئة منعشة وباردة مرة أخرى مع حلولنا الاحترافية!</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">خدمة وإصلاح تكييف O General:</a></strong> لخدمات تنظيف تكييف الهواء في دبي، المساعدة المتخصصة ضرورية للإدارة الفعالة لمشاكل التكييف. تقدم شركتنا خدمات إصلاح وصيانة تكييف خالية من المتاعب، متاحة بسهولة في كل من دبي والشارقة. ثق بنا للحفاظ على منزلك مريحًا طوال العام.</li>
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/mitsubishi-ac-repair-in-dubai/">خدمة وإصلاح تكييف Mitsubishi:</a></strong> هل تبحث عن الراحة من الحرارة الشديدة؟ اكتشف سر الحفاظ على عمل تكييف Mitsubishi الخاص بك بسلاسة في دبي! تضمن خدمة تنظيف وإصلاح تكييف Mitsubishi الخبيرة لدينا بقاء التكييف باردًا وفعالاً، مما يوفر الراحة وراحة البال. خدمة تنظيف تكييف الهواء بالقرب مني في دبي والشارقة، إصلاح التكييف وخدمة صيانة التكييف في دبي</li>
              <li><strong>إصلاح وخدمة تكييف Carrier في دبي:</strong> نحن ندرك مدى أهمية تكييف الهواء Carrier لمنزلك أو عملك. تقدم اف ايه جيه خدمات صيانة تكييف Carrier سريعة وموثوقة وفعالة. عادةً ما تكون خدمة التنظيف المنتظمة لوحدات Carrier VRF (تدفق المبرد المتغير)، المركزية، المنفصلة، الوحدة المجمعة، أو النوع الكاسيت في دبي والشارقة كافية للحفاظ على عمل نظامك بسلاسة. ومع ذلك، إذا تعرض نظام تكييف الهواء Carrier الخاص بك لعطل أو عيب أو خلل، فقد يؤثر ذلك سلبًا على بيئتك الداخلية.</li>

            </ul>
            <p className="mb-0">
              <Link to="/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">خدمة تكييف Sanyo دبي</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/rheem-ac-maintenance-in-dubai/">خدمة تكييف Rheem</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">خدمة تكييف SKM دبي</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">خدمة تكييف Daewoo دبي</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="#">خدمة تكييف Carrier</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/midea-ac-installation-maintenance-repair-fix-service-in-dubai/">خدمة تكييف Midea بالقرب مني</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/">خدمات تكييف الهواء Lennox</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">خدمة تكييف Goodman دبي</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">خدمات تكييف Coleman</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">خدمة تكييف Westpoint</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/aftron-ac-repair-maintenance-service-in-dubai-2/">خدمة صيانة تكييف Aftron بالقرب مني</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">خدمة تكييف Crafft</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/">خدمة تكييف Bryant دبي</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">خدمة تكييف Ruud</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">خدمة تكييف McQuay</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/">Blue Star</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/">خدمة تكييف Supra</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/">خدمة تكييف Toshiba</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">خدمة تكييف Whirlpool</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/">خدمة تكييف Super General</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/">خدمة تكييف Hitachi</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">خدمة تكييف O General</Link>
              <span>&nbsp;-&nbsp;</span>
              <Link to="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">خدمة تكييف Cooline بالقرب مني</Link>
            </p>


            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_30 bg-dark-blue text-light">
    <div className="container text-center">
        <h3 className="cs_fs_30 text-light">نصائح عملية لتحسين كفاءة الطاقة</h3>
        <p>تعلم طرقًا سهلة ومجربة لتوفير الطاقة مع مكيف الهواء. اكتشف نصائح لتقليل التكاليف والبقاء منتعشًا طوال الصيف!</p>
        <a
            href="https://www.fajservices.ae/dist/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf"
            className="btn-green-yellow"
            target="_blank"
            rel="noopener noreferrer"
        >
            انقر هنا لتوفير فواتير الطاقة
        </a>
    </div>
</section>
        <section className="section cs_py_30">
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cone">
                    <h4 className="cs_fs_20 mb-0">التبريد والتدفئة</h4>
                    <span className="mb-5">ابقى مرتاحًا طوال العام</span>
                    <div className="mb-5"></div>
                    <h4 className="cs_fs_20 mb-0">جودة هواء أفضل</h4>
                    <span className="mb-5">قلل من الرطوبة وحبوب اللقاح والغبار</span>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-ctwo">
                    <img className="" src={`${import.meta.env.BASE_URL}img/benafit-acimg.jpg`} alt="خدمة التكييف" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cthree">
                    <h4 className="cs_fs_20 mb-0">حماية ممتلكاتك</h4>
                    <span className="mb-5">منع التلف للأجهزة الإلكترونية والأثاث</span>
                    <div className="mb-5"></div>
                    <h4 className="cs_fs_20 mb-0">هادئ وآمن</h4>
                    <span className="mb-5">لا حاجة لترك النوافذ مفتوحة</span>
                </div>
            </div>
        </div>
    </div>
</section>
        {/* عقد الصيانة */}
        <section className="section cs_py_30 bg-light-gay pt-0">
    <div className="container">
        <div className="row justify-content-center g-3">
            <div className="col-md-6 col-lg-4">
                <div className="green-box gradient-amc-bg">
                    <h3 className="text-light cs_fs_24">عقد صيانة <br />(سنوي)</h3>
                    <div className="green-text-box">
                        <ul className="text-light mb-1">
                            <li>زيارات محدودة وغير محدودة للطوارئ والأعطال</li>
                            <li>خدمات صيانة وقائية 2 و3 مرات</li>
                            <li>قطع الغيار/المواد المشمولة وغير المشمولة</li>
                            <li>مع خدمات MEP وبدون خدمات MEP</li>
                        </ul>
                        <a href="mailto:info@fajservices.ae" className="amc-box-button">احصل على عرض سريع</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="purple-box gradient-amc-bg">
                    <h3 className="text-light cs_fs_24">عقد صيانة <br />(6 أشهر)</h3>
                    <div className="green-text-box">
                        <ul className="text-light mb-1">
                            <li>زيارات محدودة وغير محدودة للطوارئ والأعطال</li>
                            <li>خدمات صيانة وقائية 1 و2 مرات</li>
                            <li>قطع الغيار/المواد المشمولة وغير المشمولة</li>
                            <li>مع خدمات MEP وبدون خدمات MEP</li>
                        </ul>
                        <a href="mailto:info@fajservices.ae" className="amc-box-button">احصل على عرض سريع</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="cgreen-box gradient-amc-bg">
                    <h3 className="text-light cs_fs_24">عقد صيانة <br />(3 أشهر)</h3>
                    <div className="green-text-box">
                        <ul className="text-light mb-1">
                            <li>زيارات محدودة وغير محدودة للطوارئ والأعطال</li>
                            <li>خدمات صيانة وقائية 1 مرة</li>
                            <li>قطع الغيار/المواد المشمولة وغير المشمولة</li>
                            <li>مع خدمات MEP وبدون خدمات MEP</li>
                        </ul>
                        <a href="mailto:info@fajservices.ae" className="amc-box-button">احصل على عرض سريع</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        {/* قسم الشهادات */}
        <Testimonial1
                    subtitle="What Our Clients Say"
                    title="Customer <span>Reviews</span>"
                    bgImg="img/testimonialbg.jpg"
                    testimonialData={testimonial_data}
                    sectionId="home-testimonials"
                />

        {/* الأسئلة الشائعة */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">الأسئلة الشائعة</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"><FaEye /></i>
                      <i className="bi bi-eye-slash text-light"><FaEyeSlash /></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <Serviceappointemnt
            subtitle2="اتصل بنا"
            title2="احجز موعدًا"
          ></Serviceappointemnt>

        </section>
      </div>
    </>
  );
};

export default AcServiceInDubaiArabicDetail;