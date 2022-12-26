(() => {
  const refs = {
    openModalBtn: document.querySelector("[buyNow-modal-open]"),
    closeModalBtn: document.querySelector("[buyNow-modal-close]"),
    modal: document.querySelector("[buyNow-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("buyNow-is-hidden");
  }
})();