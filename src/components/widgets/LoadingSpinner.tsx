type LoadingSpinnerProps = {
  label?: string;
  className?: string;
  centered?: boolean;
};

export const LoadingSpinner = ({
  label = "Loading...",
  className = "",
  centered = true,
}: LoadingSpinnerProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4 text-[#008056]">
      <div className="content-loader" aria-hidden="true" />
      {label && <p className="text-sm font-medium font-figtree">{label}</p>}
    </div>
  );

  if (!centered) return content;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex min-h-[240px] w-full items-center justify-center ${className}`.trim()}
    >
      {content}
    </div>
  );
};

export default LoadingSpinner;
