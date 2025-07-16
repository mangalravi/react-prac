import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModel = () => {
    setIsOpen(true);
  };

  const closeModel = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModel();
    }
  };
  const modalContentStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  const modalContentStyleChild = {
    margin: "100px auto",
    padding: "20px",
    backgroundColor: "white",
    width: "300px",
    borderRadius: "5px",
  };
  return (
    <>
      <button style={{ margin: "10px" }} onClick={openModel}>
        Open Modal
      </button>
      {isOpen && (
        <div style={modalContentStyle} onClick={handleBackdropClick}>
          <div style={modalContentStyleChild}>
            <h3>Modal Content</h3>
            <p>
              This is a modal. You can close it by clicking the button below.
            </p>
            <button onClick={closeModel}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
