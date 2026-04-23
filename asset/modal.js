
(function() {
  const cvLinkStory = document.getElementById("cvLinkStory");
  const cvModal = document.getElementById("cvModal");
  const cvModalClose = document.getElementById("cvModalClose");
  const cvDownloadBtn = document.getElementById("cvDownloadBtn");

  if (!cvModal) {
    console.warn("CV Modal element not found");
    return;
  }

  function openModal(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    cvModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    cvModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  function downloadPDF(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const pdfUrl = "asset/pdf/cv-marson.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Marson_Dwi_Juanda_Zebua.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (cvLinkStory) {
    cvLinkStory.addEventListener("click", openModal);
  }

  if (cvModalClose) {
    cvModalClose.addEventListener("click", closeModal);
  }

  cvModal.addEventListener("click", (e) => {
    if (e.target === cvModal) {
      closeModal();
    }
  });

  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener("click", downloadPDF);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal.classList.contains("active")) {
      closeModal();
    }
  });

  console.log("CV Modal Premium - Loaded");
})();