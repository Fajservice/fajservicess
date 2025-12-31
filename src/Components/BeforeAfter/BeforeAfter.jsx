import { useEffect, useRef, useState } from "react";

const BeforeAfter = ({
  title = "Recent Completed Projects",
  subTitle = "Before & after",
  bgImg = "img/background-image-2.avif",
  beforeImg = "img/after_img_1.avif",
  afterImg = "img/before_img_1.avif",
  beforeTitle = "Before",
  afterTitle = "After",
  initialPercentage = 50,
}) => {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const beforeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}${bgImg}`;
    img.onload = () => setBgLoaded(true);
  }, [bgImg]);

  // Initialize background overlay
  const overlayStyle = {
    backgroundImage: bgLoaded ? `url(${import.meta.env.BASE_URL}${bgImg})` : 'none',
    backgroundColor: '#1a1a2e', // Fallback color matching your theme
    minHeight: 400, // Reserve space to prevent layout shift
    transition: 'opacity 0.3s ease',
  };

  // Set initial width for before image
  useEffect(() => {
    if (beforeRef.current && handleRef.current) {
      beforeRef.current.style.width = `${initialPercentage}%`;
      handleRef.current.style.left = `${initialPercentage}%`;
    }
  }, [initialPercentage]);

  // Drag logic
  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging || !containerRef.current || !beforeRef.current || !handleRef.current) return;

    let clientX;
    if (e.type === "mousemove") clientX = e.clientX;
    else if (e.type === "touchmove") clientX = e.touches[0].clientX;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    beforeRef.current.style.width = `${percentage}%`;
    handleRef.current.style.left = `${percentage}%`;
  };

  // Add/remove event listeners
  useEffect(() => {
    const handleDrag = (e) => onDrag(e);
    const handleStopDrag = () => stopDrag();

    if (isDragging) {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("touchmove", handleDrag);
      document.addEventListener("mouseup", handleStopDrag);
      document.addEventListener("touchend", handleStopDrag);
    }

    return () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("mouseup", handleStopDrag);
      document.removeEventListener("touchend", handleStopDrag);
    };
  }, [isDragging]);

  return (
    <section 
      className="cs_before_after_slider cs_style_1 position-relative"
      style={{ minHeight: 500 }} // Reserve section height
    >
      <div className="cs_height_80 cs_height_lg_80"></div>
      <div className="container">
        <div 
          className="cs_before_after_overlay cs_heading_bg cs_bg_filed cs_headiong_bg" 
          style={overlayStyle}
        ></div>

        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <h3 className="cs_section_subtitle cs_fs_18 cs_white_color text-uppercase cs_mb_12">
            {subTitle}
          </h3>
          <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0">{title}</h2>
        </div>

        <div className="cs_before_after-in">
          <div 
            className="cs_before_after" 
            ref={containerRef} 
            style={{ 
              position: "relative", 
              overflow: "hidden",
              aspectRatio: "16 / 9", // Reserve space for the slider
              minHeight: 300,
              backgroundColor: '#2a2a3e' // Fallback color
            }}
          >
            {/* BEFORE IMAGE */}
            <div
              ref={beforeRef}
              className="cs_before cs_single_slide cs_bg_filed"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}${beforeImg})`,
                width: `${initialPercentage}%`,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="cs_before_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {beforeTitle}
              </div>
            </div>

            {/* AFTER IMAGE */}
            <div
              className="cs_after cs_single_slide cs_bg_filed"
              style={{ 
                backgroundImage: `url(${import.meta.env.BASE_URL}${afterImg})`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
              }}
            >
              <div className="cs_after_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {afterTitle}
              </div>
            </div>

            {/* HANDLE */}
            <div
              className="cs_handle_before_after"
              ref={handleRef}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              style={{ 
                cursor: isDragging ? "grabbing" : "grab",
                position: 'absolute',
                top: 0,
                height: '100%',
                zIndex: 10,
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default BeforeAfter;