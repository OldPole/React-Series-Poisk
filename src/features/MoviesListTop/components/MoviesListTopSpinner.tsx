export const MoviesListTopSpinner = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-red-600 border-t-transparent shadow-[0_0_20px_rgba(220,38,38,0.2)]" />
    </div>
  );
};
