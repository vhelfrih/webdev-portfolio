import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay } from "./ModalStyles";
import ContactForm from "../ContactForm/ContactForm";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>Send a Message</StyledModalHeader>
        <StyledModalBody>
          <ContactForm onClose={handleCloseClick} />
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;