(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[buyNow-modal-open]'),
    closeModalBtn: document.querySelector("[buyNow-modal-close]"),
    modal: document.querySelector("[buyNow-modal]"),
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);
  Array.from(refs.openModalBtn).forEach(e => e.addEventListener("click", toggleModal))
  function toggleModal() {
    refs.modal.classList.toggle("buyNow-is-hidden");
  }
})();