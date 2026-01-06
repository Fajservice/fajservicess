export const EyeIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer eye shape – WHITE */}
    <path
      d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7z"
      fill="#ffffff"
    />

    {/* Eye outline hole */}
    <path
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
      fill="#ffffff"
    />

    {/* Pupil – BLACK */}
    <circle cx="12" cy="12" r="2.5" fill="#000000" />
  </svg>
);

export const EyeSlashIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Eye shape – WHITE */}
    <path
      d="M12 5C7 5 2.73 8.11 1 12
         c1.73 3.89 6 7 11 7
         s9.27-3.11 11-7
         c-1.73-3.89-6-7-11-7z
         M12 16a4 4 0 1 1 0-8
         a4 4 0 0 1 0 8z"
      fill="#ffffff"
    />

    {/* Slash ONLY – BLACK */}
    <line
      x1="3"
      y1="3"
      x2="21"
      y2="21"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);



