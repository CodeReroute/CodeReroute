import { Paperclip } from 'lucide-react';

interface FileUploadProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string;
  file: File | null;
  className?: string;
}

export function FileUpload({
  onFileChange,
  fileName,
  className,
}: FileUploadProps) {
  const getFileTypeIcon = () => {
    return <Paperclip className="w-5 h-5 text-white" />;
  };

  return (
    <div
      className={`h-[45px] rounded-md border-[3.5px] flex items-center justify-center border-white ${className}`}
    >
      <label className="group cursor-pointer w-full">
        <div className="w-full px-2 border-none outline-none flex items-center gap-2 transition-colors">
          {getFileTypeIcon()}
          <span className="text-white text-sm font-light placeholder:text-[13px] placeholder:text-center placeholder:font-[600] px-3 truncate">
            {fileName || 'ATTACH PORTFOLIO'}
          </span>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={onFileChange}
        />
      </label>
    </div>
  );
}
