function supportsDialog() {
  return typeof HTMLDialogElement !== "undefined";
}

function initLightbox() {
  const dialog = document.getElementById("lightboxDialog");
  if (!dialog || !supportsDialog()) return;

  const img = dialog.querySelector(".lightbox-img");
  const caption = dialog.querySelector(".lightbox-caption");
  const closeBtn = dialog.querySelector("[data-close]");

  if (!img || !caption || !closeBtn) return;

  closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!inDialog) dialog.close();
  });

  document.querySelectorAll(".gallery-item").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const full = btn.getAttribute("data-full") || "";
      img.src = full;
      img.alt = `Gallery image ${idx + 1}`;
      caption.textContent = full ? full.replace("./", "") : "";
      dialog.showModal();
    });
  });
}

document.addEventListener("DOMContentLoaded", initLightbox);

