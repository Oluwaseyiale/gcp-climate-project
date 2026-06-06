import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { InputHTMLAttributes } from "react";

type PasswordInputProps<TFormValues extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "type"
> & {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
  error?: FieldError;
  containerClassName?: string;
};

export const PasswordInput = <TFormValues extends FieldValues>({
  name,
  register,
  rules,
  error,
  className = "",
  containerClassName = "",
  ...props
}: PasswordInputProps<TFormValues>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={containerClassName}>
      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          {...register(name, rules)}
          className={`w-full border border-[#3F4040] rounded-lg p-2 pr-10 h-[52px] placeholder:text-[#3F4040] bg-white focus:outline-none focus:ring-2 focus:ring-[#008056]/30 ${className}`.trim()}
        />
        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((value) => !value)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-[#3F4040]"
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>
      {error?.message && (
        <span className="mt-1 block text-sm text-red-500">
          {String(error.message)}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
