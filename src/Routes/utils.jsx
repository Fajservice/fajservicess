import { Suspense } from "react";

const spinnerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80px',
  width: '100%',
};

const circleStyle = {
  width: '40px',
  height: '40px',
  border: '3px solid #e8e8e8',
  borderTop: '3px solid #2e6da4',
  borderRadius: '50%',
  animation: 'faj-spin 0.7s linear infinite',
};

export const LoadingSpinner = () => (
  <>
    <style>{`@keyframes faj-spin { to { transform: rotate(360deg); } }`}</style>
    <div style={spinnerStyle}>
      <div style={circleStyle} />
    </div>
  </>
);

LoadingSpinner.displayName = 'LoadingSpinner';

export const withSuspense = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};
