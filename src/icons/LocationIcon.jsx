export default function LocationIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C7.59 2 4 5.59 4 10
           c0 5.25 6.66 11.54 7.01 11.86
           a1 1 0 0 0 1.38 0
           C13.34 21.54 20 15.25 20 10
           c0-4.41-3.59-8-8-8Z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="3" fill="#ff0202ff" />
    </svg>
  );
}
