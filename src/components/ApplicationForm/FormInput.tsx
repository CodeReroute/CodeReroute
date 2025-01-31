interface FormInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export function FormInput({
  placeholder,
  value,
  onChange,
  error,
  className,
}: FormInputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="h-[45px] rounded-md border-[3.5px] border-white">
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full h-full bg-transparent border-none outline-none text-white placeholder:text-white placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 ${
            error ? 'border-red-500' : ''
          }`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}
