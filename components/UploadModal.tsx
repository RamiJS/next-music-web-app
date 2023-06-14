"use client";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Upload Modal Title"
      description="Uploadm odal desc"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload content
    </Modal>
  );
};

export default UploadModal;