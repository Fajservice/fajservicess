import { useEffect, useRef, useState, useCallback } from "react";
const EyeIcon = ({ open }) => (
  open ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 640 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M634 471L57 3.5a16 16 0 0 0-22 1.1L8 31.5a16 16 0 0 0 1 22L122 160.5C45.6 174.7-9.3 256 0 256c0 0 116 176 320 176 57.6 0 112.7-16.7 162-46.2l122.1 122.1a16 16 0 0 0 22-1l27.9-27.9a16 16 0 0 0-1.1-22zM320 400c-79.4 0-144-64.6-144-144 0-23.8 6.1-46.2 16.9-65.6L226 232c-1.1 4.4-2 8.9-2 13.6 0 53 43 96 96 96 4.7 0 9.2-.9 13.6-2l21.6 21.6C366.2 393.9 343.8 400 320 400z"/>
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 576 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M572.52 241.4C518.36 135.48 410.91 64 288 64S57.64 135.48 3.48 241.4a32.35 32.35 0 0 0 0 29.2C57.64 376.52 165.09 448 288 448s230.36-71.48 284.52-177.4a32.35 32.35 0 0 0 0-29.2zM288 400c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-240a96 96 0 1 0 96 96 96.11 96.11 0 0 0-96-96z"/>
    </svg>
  )
);

const CMFaqs = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleItemClick = index => {
    setOpenItemIndex(openItemIndex === index ? -1 : index);
  };

  useEffect(() => {
    if (firstItemOpen && data.length > 0) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen, data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/CMLandingPage.json`);
        const faqsData = await response.json();
        setData(faqsData);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <div>
      <section className="section cs_py_30 bg-dark-blue text-light">
        <div className="container">
          <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

          <div className="cs_accordians_wrapper cs_style_1 p-0">
            {data.map((item, index) => {
              const isOpen = index === openItemIndex;
              return (
                <div
                  key={index}
                  className={`cs_accordian cs_style_1 cs_type_1 ${isOpen ? "active" : ""}`}
                >
                  <div
                    className="cs_accordian_head"
                    onClick={() => handleItemClick(index)}
                  >
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <EyeIcon open={isOpen} />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="cs_accordian_body" ref={accordionContentRef}>
                      <p
                        className="mb-0"
                        dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                      ></p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMFaqs;
