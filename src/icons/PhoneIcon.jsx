export default function PhoneIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V21A2 2 0 0 1 19.82 23
           A19.86 19.86 0 0 1 1 4.18
           A2 2 0 0 1 3 2h4.09
           a2 2 0 0 1 2 1.72
           c.12.9.3 1.76.54 2.58
           a2 2 0 0 1-.45 2.11L8.09 9.91
           a16 16 0 0 0 6 6l1.5-1.09
           a2 2 0 0 1 2.11-.45
           c.82.24 1.68.42 2.58.54
           a2 2 0 0 1 1.72 2z"
        fill="currentColor"
      />
    </svg>
  );
}
