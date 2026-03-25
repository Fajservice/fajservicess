import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const isArabic = /[\u0600-\u06FF]/.test(decodeURIComponent(location.pathname));
  
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const formatLabel = (segment) => {
      const decoded = decodeURIComponent(segment);
      
      if (/[\u0600-\u06FF]/.test(decoded)) {
        return decoded.replace(/-/g, ' ');
      }
      
      // For English, apply capitalization rules
      const acronyms = ["ac", "jvc", "jvt", "lg", "dip", "jafza", "difc", "impz", "jlt", "jge", "aeg", "ifb", "jbr"];

      // Words that must keep exact casing (brands, special names)
      const customWords = {
        kitchenaid: "KitchenAid",
        delonghi: "DeLonghi",
        nespresso: "Nespresso",
        bosch: "Bosch",
        siemens: "Siemens",
        whirlpool: "Whirlpool",
        electrolux: "Electrolux",
        beko: "Beko",
        daikin: "Daikin",
        hitachi: "Hitachi",
        panasonic: "Panasonic",
        sharp: "Sharp"
      };

      return decoded
        .split("-")
        .map((word) => {
          const lower = word.toLowerCase();

          // keep special casing
          if (customWords[lower]) {
            return customWords[lower];
          }

          // Acronyms uppercase
          if (acronyms.includes(lower)) {
            return word.toUpperCase();
          }

          // Normal word capitalization
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    };

    const breadcrumbs = [
      { label: isArabic ? 'الرئيسية' : 'Home', path: '/' }
    ];

    let currentPath = '';
    
    // Handle blog paths specially
    if (pathnames[0] === 'blog' && pathnames.length > 1) {
      // Add "Blogs" as a breadcrumb item with path /blogs/
      breadcrumbs.push({
        label: isArabic ? 'المدونة' : 'Blogs',
        path: '/blogs/'
      });
      
      // Then add the blog post title
      pathnames.slice(1).forEach((segment) => {
        currentPath += `${segment}/`;
        breadcrumbs.push({
          label: formatLabel(segment),
          path: `/blog/${currentPath}`
        });
      });
    } else {
      // Normal path handling for non-blog routes
      pathnames.forEach((segment) => {
        currentPath += `/${segment}/`;
        breadcrumbs.push({
          label: formatLabel(segment),
          path: currentPath
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav 
      className="breadcrumb-nav" 
      aria-label="breadcrumb"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.path} className="breadcrumb-item">
                {!isLast ? (
                  <>
                    <Link to={crumb.path} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                    <span className="breadcrumb-separator">
                      {isArabic ? '‹' : '›'}
                    </span>
                  </>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .breadcrumb-nav {
          padding: 10px 0px 6px;
          background-color: #fff;
      } 
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .breadcrumb-nav[dir="rtl"] .breadcrumb-list {
          flex-direction: row;
        }
        
        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        
        .breadcrumb-link {
          color: #5DB3CD;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .breadcrumb-link:hover {
          color: #5DB3CD;
          text-decoration: underline;
        }
        
        .breadcrumb-separator {
          color: #5DB3CD;
          margin: 0 8px;
          font-size: 12px;
        }
        
        .breadcrumb-current {
          color: #666;
        }
        
        @media (max-width: 576px) {
          .breadcrumb-item {
            font-size: 13px;
          }
          
          .breadcrumb-separator {
            margin: 0 5px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumb;