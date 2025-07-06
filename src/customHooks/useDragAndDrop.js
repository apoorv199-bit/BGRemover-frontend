import { useState } from "react";

const useDragAndDrop = ({
  onDrop,
  acceptedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"],
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file) => {
    return acceptedTypes.includes(file.type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length === 0) return;

    const file = files[0];

    if (validateFile(file)) {
      onDrop(file, null);
    } else {
      onDrop(null, "Invalid file type");
    }
  };

  const dragProps = {
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  };

  return {
    isDragging,
    dragProps,
    validateFile,
  };
};

export default useDragAndDrop;
