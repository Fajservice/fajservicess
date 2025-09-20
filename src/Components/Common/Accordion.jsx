import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Accordion = ({ data, initialCount = 5 }) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  // Decide how many items to show
  const visibleData = showAll ? data : data.slice(0, initialCount);

  return (
    <div className="cs_accordians_wrapper cs_style_1 p-0 gap-0">
      {visibleData.map((item, index) => {
        const isOpen = index === openItemIndex;
        return (
          <div
            key={index}
            className={`cs_accordian cs_style_1 cs_type_1 ${
              isOpen ? "active" : ""
            }`}
          >
            <div
              className="cs_accordian_head"
              onClick={() => handleItemClick(index)}
            >
              <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
              <span className="cs_accordian_toggle">
                {isOpen ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {isOpen && (
              <div className="cs_accordian_body">
                <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{
                    __html: item.desc.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </div>
            )}
          </div>
        );
      })}

      {/* Show Read More / Show Less button if there are more items */}
      {data.length > initialCount && (
        <div className="text-center mt-3">
          <button
            className="button-get-help"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
