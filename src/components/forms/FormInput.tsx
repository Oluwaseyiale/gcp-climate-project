import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { InputHTMLAttributes } from "react";

type FormInputProps<TFormValues extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
  error?: FieldError;
  containerClassName?: string;
};

const defaultInputClassName =
  "w-full border border-[#3F4040] rounded-lg p-2 h-[52px] placeholder:text-[#3F4040] bg-white focus:outline-none focus:ring-2 focus:ring-[#008056]/30";

export const FormInput = <TFormValues extends FieldValues>({
  name,
  register,
  rules,
  error,
  className = "",
  containerClassName = "",
  ...props
}: FormInputProps<TFormValues>) => {
  return (
    <div className={containerClassName}>
      <input
        {...props}
        {...register(name, rules)}
        className={`${defaultInputClassName} ${className}`.trim()}
      />
      {error?.message && (
        <span className="mt-1 block text-sm text-red-500">
          {String(error.message)}
        </span>
      )}
    </div>
  );
};

export default FormInput;
