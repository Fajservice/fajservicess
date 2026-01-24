import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const formatLabel = (segment) => {
      return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const breadcrumbs = [
      { label: 'Home', path: '/' }
    ];

    let currentPath = '';
    pathnames.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: formatLabel(segment),
        path: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
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
                    <span className="breadcrumb-separator">&gt;</span>
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
          padding-top: 20px;
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