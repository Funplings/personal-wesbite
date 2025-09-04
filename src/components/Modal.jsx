const Modal = ({ isOpen, imageSrc, imageTitle, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imageSrc} alt={imageTitle} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;