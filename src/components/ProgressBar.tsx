type MinimalProgressBarProps = {
    progress?: number;
};

export default function MinimalProgressBar({ progress = 0 }: MinimalProgressBarProps) {
    const clamped = Math.max(0, Math.min(100, progress));

    return (
        <div className="flex items-center gap-4 w-52 max-w-lg">
            {/* Progress bar container */}
            <div className="flex-1 bg-[#FBFBFD] rounded-full overflow-hidden h-3 border border-gray-200">
                {/* Filled part */}
                <div
                    className="h-full bg-green-500  transition-all duration-500 ease-out rounded-l-full"
                    style={{ width: `${clamped}%` }}
                />
            </div>

            {/* Percentage text */}
            <span className="text-black text-sm font-medium">
        {clamped}%
      </span>
        </div>
    );
}
