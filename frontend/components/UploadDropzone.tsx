import { useRef, useState } from "react";

export default function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const onFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    setFiles(Array.from(newFiles));
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-cloud">
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => onFiles(e.target.files)}
      />
      <p className="text-sm text-steel">Drag and drop PDFs, GST returns, bank statements</p>
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-ink text-white"
        onClick={() => inputRef.current?.click()}
      >
        Select files
      </button>
      {files.length > 0 && (
        <div className="mt-4 text-left">
          <p className="text-xs text-steel">Selected:</p>
          <ul className="text-sm text-ink">
            {files.map((f) => (
              <li key={f.name}>{f.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
