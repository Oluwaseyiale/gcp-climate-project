import type { ChangeEventHandler } from "react";

type SearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}: SearchInputProps) => {
  return (
    <div
      className={`animate-section-enter flex items-center rounded-lg bg-[#FBFEFD] px-4 py-2 shadow-[#00986740] shadow-sm transition duration-200 ease-out focus-within:-translate-y-0.5 focus-within:shadow-md ${className}`.trim()}
    >
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#FBFEFD] placeholder:font-figtree placeholder:text-[#575858] focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
