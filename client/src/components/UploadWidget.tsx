import { UploadButton } from "@bytescale/upload-widget-react";

type UploadWidgetProps = {
  setState: React.Dispatch<React.SetStateAction<string[]>>;
};

const options = {
  apiKey: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "",
  maxFileCount: 4,
};

const UploadWidget = ({ setState }: UploadWidgetProps) => (
  <UploadButton
    options={options}
    onComplete={(files) => setState((prev) => [...prev, files[0].fileUrl])}
  >
    {({ onClick }) => (
      <button
        onClick={onClick}
        className="py-2 px-4 rounded-md bg-amber-200 cursor-pointer hover:bg-amber-300"
      >
        Upload a file...
      </button>
    )}
  </UploadButton>
);

export default UploadWidget;
