import { Suspense } from "react";

// Loading component
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Add display name for debugging
LoadingSpinner.displayName = 'LoadingSpinner';

// Higher-order component for suspense wrapper
export const withSuspense = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );
  
  // Set display name for debugging
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
};